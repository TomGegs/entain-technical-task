# Entain Technical Setup

Overview of the packages and decisions made in this project

## Build

Vite
React
TypeScript

## Routing

React Router

## Styling

TailwindCSS

## API Handling

Axios
Socket.io (Real-time data handling)

## Data Management

React Query

## State Management

Zustand

## Schema, parsing, validation

Zod

## Date/Time handling

Date Fns

## Linting / Coding Standards

Prettier
EsLint

## Unit Testing

Vitest
vitest ui

## Component Testing

Storybook

## E2E testing

Playwright

## Design Pattern

Single Responsibility Principle

## Requirements

### Design

> SPA
> Design the 'Next to go' races section
> Tabular format

### API Management

> Display greyhound. harness and horse racing
> 5 races per sport
> Races sorted in ascending order
> Race will disappear from the list from 1 minute after the start time of their race (advertised_start)
> meeting_name, race_number and a countdown timer must be rendered
> countdown timer indicates time until start of race

### User Functions

> Toggle race categories

### API information

Categories are defined by IDs and are the following.

> Greyhound racing: ​category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61'
> Harness racing: ​category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b'
> Horse racing: ​category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfa
> GET https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10

### To Do List: Make it work, make it right, make it fast

Scaffolding
Fetch API data
parse/validate/api data
Real-time update to data
cycle data 1 minute after race start
