### 👑 NotevisorLM

**The LLM that remembers what you don’t.**  
NotevisorLM maps your notes, tracks what’s fading, and crowns the next thing to review using active recall and spaced repetition.

👑 **What it does**
- Builds a concept graph across your notes
- Predicts which ideas you’re likely to forget
- Surfaces timely refreshers, quizzes, and summaries
- Tags, clusters, and retrieves related notes
- Plays nicely with existing note apps and formats!

👑 **Why it matters**
Too many notes turn into a quiet mausoleum. NotevisorLM revives the right ideas at the right moment so knowledge compounds.

👑 **Highlights**
- Lightweight LLM core with pluggable storage
- Privacy-first local processing options
- Simple APIs for import/export and scheduling
- Clear metrics: recall score, review cadence, stability

👑 **Quick peek**
```bash
# install
pip install notevisorlm

# index notes and get your next review set
notevisorlm index ./notes
notevisorlm review --count 10
