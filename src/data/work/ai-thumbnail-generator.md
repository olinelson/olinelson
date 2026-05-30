---
title: AI Thumbnail Generator
tag: Uscreen · 0→1
summary: An end-to-end system that turns any video into high-converting, on-brand thumbnails — automatically, at roughly 28× lower cost per image.
published: 2025-08-01
order: 2
stack:
  - Ruby on Rails
  - Python
  - OpenAI
  - Mux
  - React
outcomes:
  - "~28× lower cost per thumbnail through model and pipeline optimisation"
  - "Mux frame extraction → GPT vision scoring → industry-aware templates"
  - "Shipped as a net-new product surface, owned end-to-end"
appType: WebApplication
---

## The problem

On a creator video platform, the thumbnail is the whole ballgame — it's the
difference between a click and a scroll-past. But most creators aren't
designers, and producing a strong, on-brand thumbnail for every video is exactly
the kind of repetitive work that quietly caps how much people publish.

The goal: take any video a creator uploads and hand back a thumbnail good enough
to ship, without them touching a design tool.

## What I built

An end-to-end pipeline, owned from extraction through to the rendered image:

1. **Frame extraction** — pull candidate frames from the source video with Mux.
2. **Vision scoring** — score those frames with GPT vision for the things that
   actually make a thumbnail work: a clear subject, expression, composition.
3. **On-brand composition** — drop the winning frame into industry-aware
   templates so the output looks intentional, not auto-generated.

## Driving cost down ~28×

The first version proved the concept but was too expensive per image to offer at
the price point it needed to live at. Through model selection and pipeline
optimisation, I drove the **cost per thumbnail down roughly 28×** — the
difference between a neat demo and something that could actually ship to every
creator on the platform.

## Outcome

It went out as a net-new product surface, owned end-to-end — the pipeline, the
product experience around it, and the rollout. The interesting engineering
wasn't any single model call; it was making a multi-stage AI pipeline cheap and
reliable enough to put in front of real users.
