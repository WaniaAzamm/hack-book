# Data Model: Digital Twin Module (Gazebo & Unity)

## Content Entities

### Chapter Document
- **name**: String (required) - The chapter identifier
- **title**: String (required) - Display title for the chapter
- **content**: String (required) - Markdown content of the chapter
- **word_count**: Integer (required) - Target word count (approx. 500 per chapter)
- **learning_objectives**: Array<String> - List of learning objectives
- **hands_on_exercises**: Array<Object> - Practical exercises for students
- **academic_sources**: Array<Object> - Academic references and citations
- **file_path**: String (required) - Path where the Markdown file will be stored

### Academic Source
- **title**: String (required) - Title of the academic work
- **authors**: Array<String> - List of authors
- **journal**: String - Journal or conference name
- **year**: Integer - Publication year
- **doi**: String - Digital Object Identifier
- **url**: String - Access URL
- **citation_type**: String - Type of source (journal, conference, etc.)

### Learning Objective
- **id**: String (required) - Unique identifier
- **description**: String (required) - What the student should learn
- **difficulty_level**: String - Basic, Intermediate, or Advanced
- **related_chapter**: String - Reference to the chapter it belongs to

### Hands-on Exercise
- **id**: String (required) - Unique identifier
- **title**: String (required) - Exercise title
- **description**: String (required) - Detailed exercise instructions
- **estimated_time**: Integer - Time in minutes to complete
- **prerequisites**: Array<String> - What student needs to know/installed
- **expected_outcome**: String - What student should achieve
- **related_chapter**: String - Reference to the chapter it belongs to

## Content Relationships

- Chapter Document 1 → * Academic Source (each chapter references multiple academic sources)
- Chapter Document 1 → * Learning Objective (each chapter has multiple learning objectives)
- Chapter Document 1 → * Hands-on Exercise (each chapter includes practical exercises)

## Validation Rules

- Chapter Document.word_count must be between 450 and 550
- Chapter Document.learning_objectives must contain at least 2 items
- Chapter Document.academic_sources must contain at least 5 items
- Chapter Document.hands_on_exercises must contain at least 1 item
- Academic Source.citation_type must be one of: "journal", "conference", "book", "thesis", "report"
- Learning Objective.difficulty_level must be one of: "Basic", "Intermediate", "Advanced"

## State Transitions

- Content Draft → Content Review (when initial content is completed)
- Content Review → Content Approved (when reviewed and approved)
- Content Approved → Content Published (when integrated into Docusaurus site)