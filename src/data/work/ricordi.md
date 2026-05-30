---
title: Ricordi
tag: Founder · AI-native
summary: An AI-native platform for music lessons — record a lesson and it becomes a timestamped practice plan automatically.
published: 2025-09-01
order: 1
stack:
  - Ruby on Rails
  - Anthropic
  - Hotwire
  - Hotwire Native
  - iOS
outcomes:
  - "AI lesson analysis: a recording becomes a timestamped practice plan"
  - "Shipped web and native iOS (Hotwire Native), in invite-only beta"
  - "Owned end-to-end: product, AI pipeline, full-stack, branding, pricing"
liveUrl: https://ricordi.ai
liveLabel: ricordi.ai
appType: WebApplication
---

## The problem

Most of what happens in a music lesson is gone by the time the student gets
home. The teacher said something important at minute fourteen, demonstrated a
bowing change at minute twenty — but a week later the student is practising from
a half-remembered note scrawled in the margin. The lesson was the easy part;
turning it into focused practice is where progress is won or lost.

I'd seen this first-hand running [Maestrocast](https://maestrocast.com), a live
platform real music studios teach on. Ricordi is the answer to the question
those lessons kept raising: what if the lesson practised itself?

## What I built

Record a lesson and Ricordi's AI analyses it into a **timestamped practice
plan** — the specific things to work on, linked back to the moment in the
recording they came from. Around that sits a shared student workspace and a
single teacher/student/parent chat thread, so everyone involved in a student's
progress is looking at the same place.

It runs on Ruby on Rails with Hotwire, with the AI pipeline built on Anthropic's
models. The native iOS app is built with Hotwire Native, so the web and the app
share one codebase rather than splitting into two products to maintain.

## Owned end-to-end

This is my own product, so I own all of it: the product decisions, the AI
pipeline that does the lesson analysis, the full-stack build, the branding, and
the pricing. It's currently in invite-only beta with a native iOS app alongside
the web app.
