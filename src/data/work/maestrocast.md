---
title: Maestrocast
tag: Founder · live product
summary: A real-time video platform built specifically for online music teaching — control student cameras, annotate sheet music live, share handouts, and run lessons in one place.
published: 2025-07-01
order: 2
stack:
  - Ruby on Rails
  - WebRTC
  - Hotwire
outcomes:
  - "Low-latency video built from scratch: live annotation, high-fidelity audio, recording"
  - "A paying studio runs ~30 lessons a week on it"
  - "Owned end-to-end: full-stack, UX, branding, and pricing"
liveUrl: https://maestrocast.com
liveLabel: maestrocast.com
appType: WebApplication
---

## The problem

Generic video calls are a bad fit for teaching an instrument. The audio is
compressed until a cello sounds like a kazoo, you can't point at a bar of sheet
music while the student plays it, and handing over a scale or an exercise means
fumbling with screen-share and email. Music teachers were making the tools they
had bend to a job they were never built for.

I went straight to the people living with this — running customer discovery with
working music teachers and building around their actual lesson, not a guess at
it.

## What I built

A real-time video platform made specifically for online music teaching:

- **Live sheet-music annotation** — mark up the score together while the student
  plays, so feedback lands on the exact bar it's about.
- **High-fidelity audio** — tuned for an instrument in a room, not a voice on a
  call.
- **Camera control and recording** — manage the student's view and capture the
  lesson for later.
- **Handouts and lesson management** — scales, exercises, and materials shared in
  one place instead of scattered across email.

It's built on Ruby on Rails with Hotwire, and the low-latency video layer is
WebRTC, built from scratch rather than bolted onto an off-the-shelf calling SDK.

## Owned end-to-end

Maestrocast is my own product, so I owned all of it — the full-stack build, the
UX, the branding, and the pricing. It's a live product with a paying studio
running around **30 lessons a week** on it, and the lessons it surfaced are
exactly what led me to build [Ricordi](/work/ricordi.html).
