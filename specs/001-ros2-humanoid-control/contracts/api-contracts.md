# API Contracts: ROS 2 Humanoid Control Module

## Content API

### Get Module Information
- **Endpoint**: `GET /api/modules/{module_id}`
- **Description**: Retrieve information about a specific educational module
- **Parameters**:
  - `module_id`: The unique identifier of the module
- **Response**:
  ```json
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "target_audience": ["string"],
    "estimated_duration_hours": "number",
    "prerequisites": ["string"],
    "learning_objectives": ["LearningObjective"],
    "chapters": ["ChapterSummary"]
  }
  ```

### Get Chapter Content
- **Endpoint**: `GET /api/modules/{module_id}/chapters/{chapter_id}`
- **Description**: Retrieve the content of a specific chapter
- **Parameters**:
  - `module_id`: The unique identifier of the parent module
  - `chapter_id`: The unique identifier of the chapter
- **Response**:
  ```json
  {
    "id": "string",
    "title": "string",
    "module_id": "string",
    "order": "number",
    "content": "markdown string",
    "learning_objectives": ["LearningObjective"],
    "duration_hours": "number",
    "exercises": ["ExerciseSummary"],
    "assessments": ["AssessmentSummary"],
    "academic_sources": ["AcademicSource"]
  }
  ```

### Get Exercises for Chapter
- **Endpoint**: `GET /api/modules/{module_id}/chapters/{chapter_id}/exercises`
- **Description**: Retrieve all exercises for a specific chapter
- **Parameters**:
  - `module_id`: The unique identifier of the parent module
  - `chapter_id`: The unique identifier of the chapter
- **Response**:
  ```json
  {
    "exercises": [
      {
        "id": "string",
        "title": "string",
        "chapter_id": "string",
        "description": "string",
        "instructions": "string",
        "expected_outcomes": "string",
        "difficulty_level": "string",
        "required_tools": ["string"]
      }
    ]
  }
  ```

## Academic Validation API

### Validate Academic Sources
- **Endpoint**: `POST /api/validation/academic-sources`
- **Description**: Validate that content meets academic standards
- **Request**:
  ```json
  {
    "content_id": "string",
    "sources": ["AcademicSource"],
    "minimum_peer_reviewed_percentage": "number"
  }
  ```
- **Response**:
  ```json
  {
    "valid": "boolean",
    "issues": ["string"],
    "suggestions": ["string"]
  }
  ```

## Assessment API

### Submit Assessment Response
- **Endpoint**: `POST /api/assessments/{assessment_id}/submit`
- **Description**: Submit responses to an assessment
- **Parameters**:
  - `assessment_id`: The unique identifier of the assessment
- **Request**:
  ```json
  {
    "student_id": "string",
    "responses": [
      {
        "question_id": "string",
        "answer": "string"
      }
    ]
  }
  ```
- **Response**:
  ```json
  {
    "score": "number",
    "max_score": "number",
    "percentage": "number",
    "passed": "boolean",
    "feedback": ["string"]
  }
  ```