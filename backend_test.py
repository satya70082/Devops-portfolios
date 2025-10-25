#!/usr/bin/env python3
"""
Backend API Testing for Satyabrata Panigrahi's Portfolio Contact Form
Tests the contact form backend integration with comprehensive validation scenarios.
"""

import requests
import json
import os
from datetime import datetime

# Read backend URL from frontend .env file
def get_backend_url():
    env_path = "/app/frontend/.env"
    with open(env_path, 'r') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                return line.split('=', 1)[1].strip()
    raise ValueError("REACT_APP_BACKEND_URL not found in frontend/.env")

BACKEND_URL = get_backend_url()
API_BASE = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE}")

def test_valid_contact_submission():
    """Test Case 1: Valid Contact Form Submission"""
    print("\n=== Test 1: Valid Contact Form Submission ===")
    
    payload = {
        "name": "John Doe",
        "email": "john@example.com", 
        "subject": "Collaboration Inquiry",
        "message": "I would like to discuss a potential collaboration opportunity regarding DevOps consulting."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and data.get("id") and data.get("message"):
                print("✅ PASS: Valid submission successful")
                return True, data.get("id")
            else:
                print("❌ FAIL: Response missing required fields")
                return False, None
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False, None

def test_invalid_email_format():
    """Test Case 2: Invalid Email Format"""
    print("\n=== Test 2: Invalid Email Format ===")
    
    payload = {
        "name": "Test User",
        "email": "invalid-email",
        "subject": "Test", 
        "message": "Testing invalid email format validation"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ PASS: Invalid email properly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 422 validation error, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_missing_required_fields():
    """Test Case 3: Missing Required Fields"""
    print("\n=== Test 3: Missing Required Fields (message) ===")
    
    payload = {
        "name": "Test",
        "email": "test@test.com",
        "subject": "Test"
        # Missing "message" field
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ PASS: Missing required field properly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 422 validation error, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_message_too_short():
    """Test Case 4: Message Too Short"""
    print("\n=== Test 4: Message Too Short ===")
    
    payload = {
        "name": "Test",
        "email": "test@test.com", 
        "subject": "Short",
        "message": "Hi"  # Only 2 characters, minimum is 10
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ PASS: Short message properly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 422 validation error, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_mongodb_storage_verification():
    """Test Case 5: Verify MongoDB Storage (indirect verification via API)"""
    print("\n=== Test 5: MongoDB Storage Verification ===")
    
    # Submit a unique message we can identify
    timestamp = datetime.now().isoformat()
    payload = {
        "name": "MongoDB Test User",
        "email": "mongotest@example.com",
        "subject": f"Storage Test {timestamp}",
        "message": f"This is a test message to verify MongoDB storage at {timestamp}. This message should be stored with auto-generated timestamp, status=new, and unique ID."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and data.get("id"):
                print(f"✅ PASS: Message stored with ID: {data.get('id')}")
                print("Note: MongoDB storage verified indirectly via successful API response")
                return True
            else:
                print("❌ FAIL: Response indicates storage failure")
                return False
        else:
            print(f"❌ FAIL: Storage test failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Storage test failed - {str(e)}")
        return False

def run_all_tests():
    """Run all contact form tests"""
    print("=" * 60)
    print("CONTACT FORM BACKEND API TESTING")
    print("=" * 60)
    
    results = []
    
    # Test 1: Valid submission
    success, contact_id = test_valid_contact_submission()
    results.append(("Valid Contact Submission", success))
    
    # Test 2: Invalid email
    success = test_invalid_email_format()
    results.append(("Invalid Email Format", success))
    
    # Test 3: Missing fields
    success = test_missing_required_fields()
    results.append(("Missing Required Fields", success))
    
    # Test 4: Message too short
    success = test_message_too_short()
    results.append(("Message Too Short", success))
    
    # Test 5: MongoDB storage
    success = test_mongodb_storage_verification()
    results.append(("MongoDB Storage", success))
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, success in results:
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{test_name}: {status}")
        if success:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Contact form backend is working correctly.")
        return True
    else:
        print("⚠️  Some tests failed. Contact form backend needs attention.")
        return False

if __name__ == "__main__":
    run_all_tests()