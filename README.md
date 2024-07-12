# Project Overview

Questing Coders is proud to present a fully redesigned Sip & Play Website.

Figma Design can be found [here](https://www.figma.com/design/K51XvDgoSvHWpwo3pBSgs9/Questing-Coders?node-id=0-1&t=e4xoJ5Oht9OdCvDi-1).

### Pages

Home - Welcoming page with a call to action to make a reservation

Events - This page is integrated with Google Calendar so that anyone with access to the Calendar can add/edit/remove events.

Menu* - Interactive menu let's you load 3D Assets in two different areas, allowing the user to preview their order before it's made.

Board Games** - The dataset visible on this page comes straight from the list of board games Sip & Play list [on their site](https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0). We took this list and retrieved additional metadata using ChatGPT. The table now shows a much more detailed view of all the games Sip & Play has to offer.

Reservations - A straightforward page linking out to the Reservations platform.

Tip: Don't forget to turn on the music while you browse the site!

\*Not all menu items are unique
<br>
\** Not all Game Rule links work

### If we had more time:

- More Mobile-friendly design
- Search for additional 3D Menu files
- Ensure all Board Game links worked

### Technologies Used:

- Angular 17 w/ SSR
- Typescript
- Material Design
- ThreeJS
- Firebase for CI/CD
- Vercel

## Getting Started

Run the development server:

```bash
npm i
npm run start
```

Open [http://localhost:4200](http://localhost:4200) with your browser to see the result.
