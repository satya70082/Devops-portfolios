# API Contracts & Integration Plan

## Overview
This document outlines the API contracts and integration plan for Satyabrata Panigrahi's Portfolio website.

## Current Mock Data
**File**: `/app/frontend/src/mock.js`
- Portfolio personal information (name, email, phone, links)
- Stats (years experience, projects, performance metrics)
- Skills categorized by technology areas
- Projects with descriptions, highlights, technologies, and metrics
- Education details
- About section content

**Status**: All sections are currently using static mock data. No backend integration yet.

---

## Backend Implementation Required

### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "message_id"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": "Error message"
}
```

**MongoDB Collection**: `contact_messages`
**Fields**:
- name: String
- email: String
- subject: String
- message: String
- timestamp: DateTime (auto-generated)
- status: String (default: "new")
- id: UUID

---

## Frontend Integration Changes

### Contact.jsx
**Current**: Form submission shows mock toast notification
**Change Required**:
1. Import axios for API calls
2. Update `handleSubmit` to POST to `/api/contact`
3. Handle success/error responses
4. Show appropriate toast notifications based on response

**Code Changes**:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
    toast({
      title: "Message Sent!",
      description: response.data.message,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive"
    });
  }
};
```

---

## Implementation Steps

### Backend (server.py)
1. Create Pydantic model for ContactMessage
2. Create POST endpoint `/api/contact`
3. Add validation for email format
4. Store message in MongoDB `contact_messages` collection
5. Return success/error response

### Frontend (Contact.jsx)
1. Import axios and BACKEND_URL
2. Update handleSubmit function with API call
3. Add loading state during submission
4. Handle errors gracefully

---

## Testing Checklist
- [ ] Form validation works (required fields)
- [ ] Email format validation
- [ ] Successful submission stores data in MongoDB
- [ ] Success toast appears on successful submission
- [ ] Error toast appears on failure
- [ ] Form clears after successful submission
- [ ] Loading state prevents multiple submissions

---

## Notes
- Portfolio content (skills, projects, about) remains static (from mock.js)
- Only contact form requires backend integration
- No authentication needed for contact form
- Consider adding rate limiting for production (future enhancement)
