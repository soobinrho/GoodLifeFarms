<br>
<br>

## Who are we?

We are Kathy, Tobi, and Soobin.
We met at Stanford TreeHacks, in which we created self-sustainable web app for local producers (farmers, beekeepers, and so on).

Right now, our website just shows a prototype, but in the far future hopefully, we envision to have a "create your own web app for your local farm" button which can create this web app for any local producers who needs their own web app to sell their produces.
We envision to be Vercel for local producers -- providing a completely free service to anyone who needs it, and starting to charge for our services, only if that specific user needs millions or billions of rows of data that cannot be handled effectively by our existing, free Google Sheets back-end infrastructure.

Our main aim is

- (a) to make it as self-sustainable as possible by making it zero-maintenance cost (we did it by getting rid of databases and just using Google Sheets API's which are completely free) so that the local producers don't have to pay a dime in order to have their own dedicated platform, and
- (b) to make it as UI/UX friendly as possible so that they can use it in the field without having to come back indoors and sit in front of their computers. We built it such that basically we give you an access to Google Sheets document, and whatever you edit there (name of the produce and quantity and notes) gets automatically listed on the web app. So, the only thing the farmer has to do is just type in whatever they have (name / quantity / notes) on a Google Sheet!

## 2024-02-16

```bash
# Initialized our web app as a Next.js project.
pnpm create next-app good-life-farms

# Background color gradient was based on Tailwind UI:
#   https://tailwindui.com/components/marketing/sections/heroes

# Color palette was generated using Colorhunt.co:
#   https://coolors.co/366345-b8b42d-6a3937-fffcf1-f4f4f8

# Main package we relied on:
#   https://theoephraim.github.io/node-google-spreadsheet/

# If using VS Code, recommended to install the Prettier extension:
#   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
```

## 2024-02-18

After 36 hours of sleepless nights at TreeHacks, we finished our prototype!

<img src="https://github.com/soobinrho/good-life-farms/assets/19341857/714ccbab-7fcb-4e51-947b-912261e43e49" width="500px">
<img src="https://github.com/soobinrho/good-life-farms/assets/19341857/def6b413-cab8-4ec5-a4af-d2a5b5a0df96" width="500px">
<img src="https://github.com/soobinrho/good-life-farms/assets/19341857/d2012e65-0a2f-42e0-8a8c-e7d3b3ea479b" width="500px">
<img src="https://github.com/soobinrho/good-life-farms/assets/19341857/5436621c-8c52-4943-9e35-0a819ab7d3b0" width="500px">

<br>
