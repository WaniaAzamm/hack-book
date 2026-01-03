# Data Model: ROS 2 Humanoid Control Module

## Entities

### Module
- **id**: Unique identifier for the module
- **title**: "Module 1 — The Robotic Nervous System (ROS 2)"
- **description**: Educational content covering ROS 2 for humanoid robot control
- **target_audience**: ["CS students", "Engineering students"]
- **estimated_duration_hours**: 20
- **prerequisites**: ["Basic programming knowledge", "Introduction to robotics concepts"]
- **learning_objectives**: Array of learning objectives for the entire module
- **chapters**: Array of chapter references

### Chapter
- **id**: Unique identifier for the chapter
- **title**: Chapter title (e.g., "ROS 2 Communication", "Python Control via rclpy", "Humanoid Modeling with URDF")
- **module_id**: Reference to parent module
- **order**: Position in the module sequence (1, 2, 3)
- **content**: Markdown content of the chapter
- **learning_objectives**: Array of specific learning objectives for this chapter
- **duration_hours**: Estimated time to complete this chapter
- **exercises**: Array of exercise references
- **assessments**: Array of assessment references
- **academic_sources**: Array of academic citations used in this chapter

### Exercise
- **id**: Unique identifier for the exercise
- **title**: Exercise title
- **chapter_id**: Reference to parent chapter
- **description**: Detailed description of the exercise
- **instructions**: Step-by-step instructions for students
- **expected_outcomes**: What students should achieve
- **difficulty_level**: "beginner", "intermediate", or "advanced"
- **required_tools**: List of tools/software needed
- **solution**: Reference to solution (for instructor access)

### Assessment
- **id**: Unique identifier for the assessment
- **title**: Assessment title
- **chapter_id**: Reference to parent chapter
- **type**: "quiz", "practical", "project", etc.
- **questions**: Array of question references
- **scoring_criteria**: How the assessment will be graded
- **passing_threshold**: Minimum score required to pass

### Question
- **id**: Unique identifier for the question
- **assessment_id**: Reference to parent assessment
- **question_text**: The actual question
- **question_type**: "multiple_choice", "short_answer", "practical", etc.
- **options**: Array of possible answers (for multiple choice)
- **correct_answer**: The correct answer
- **explanation**: Explanation of the correct answer

### AcademicSource
- **id**: Unique identifier for the source
- **title**: Title of the source
- **authors**: Array of author names
- **publication_date**: Date of publication
- **source_type**: "academic_paper", "textbook", "documentation", "tutorial"
- **url**: Link to the source (if available)
- **citation**: Full APA citation
- **relevance**: Description of how this source relates to the content

### LearningObjective
- **id**: Unique identifier for the objective
- **text**: The learning objective statement
- **cognitive_level**: Bloom's taxonomy level (remember, understand, apply, analyze, evaluate, create)
- **associated_content**: Reference to related content (chapter, exercise, etc.)
- **assessment_method**: How this objective will be assessed

## Relationships

- Module **has many** Chapters
- Chapter **has many** Exercises
- Chapter **has many** Assessments
- Assessment **has many** Questions
- Chapter **has many** AcademicSources
- Module **has many** LearningObjectives
- Chapter **has many** LearningObjectives