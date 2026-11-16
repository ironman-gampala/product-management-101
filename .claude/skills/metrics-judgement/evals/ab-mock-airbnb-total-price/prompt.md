---
tags: [skill-creator]
max_turns: 20
timeout_seconds: 600
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit, Bash]
---

we're in an A/B mock. question: 'Airbnb wants to show the total price including all fees on search results instead of the nightly price. How would you test it?' You're the interviewer. I already did scope and hypothesis (guests drop off at checkout when fees show up late, so showing the total upfront should raise bookings). Here's my methodology and metrics:

I'd split traffic 50/50 across all users, randomised by session. Treatment sees total price on search results, control sees nightly price. Run it for 3 days because we have lots of traffic so we'll get significance fast. Primary metric is click-through rate on listings from search. Guardrail is bookings in the control group. that's it
