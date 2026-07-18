# Zawadi June Conference Landing Page

A modern, luxurious, and responsive event landing page built using **HTML5**, **CSS3**, and **Vanilla JavaScript**.

The website is designed to increase registrations for the **Zawadi June Professional & Corporate Workshops**.

---

## Features

- Modern luxury conference design
- Fully responsive layout
- Sticky navigation
- Smooth scrolling
- Hero section with event countdown
- Featured speakers
- Event agenda timeline
- Venue section
- Registration form
- FAQ accordion
- Scroll reveal animations
- Scroll-to-top button
- SEO-friendly HTML
- Clean and organized project structure

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

No frameworks or libraries are required.

---

## Folder Structure

```text
zawadi-event/

│
├── index.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── countdown.js
│   ├── faq.js
│   └── scroll.js
│
├── images/
│   ├── hero.jpg
│   ├── audience.jpg
│   ├── stage.jpg
│   ├── speaker1.jpg
│   ├── speaker2.jpg
│   ├── speaker3.jpg
│   ├── speaker4.jpg
│   └── logo.svg
│
├── fonts/
│
└── README.md
```

---

## Color Palette

| Color | Hex |
|--------|------|
| Dark Blue | #07133D |
| Vivid Blue | #004A98 |
| White | #FFFFFF |
| Light Blue | #5FA8FF |

---

## Typography

### Headings

Neue Machina

### Body

Raleway

---

## Images

Replace the placeholder images inside the **images** folder.

Example:

```
images/
hero.jpg
stage.jpg
audience.jpg
speaker1.jpg
speaker2.jpg
```

You can use your uploaded conference photographs for:

- Hero banner
- Venue section
- Background textures
- Promotional sections

---

## Running the Project

Simply open

```
index.html
```

inside your browser.

Or use **VS Code** with the **Live Server** extension.

---

## Deployment

This project can be deployed on:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any Apache or Nginx server

---

## Customization

### Change Event Date

Open:

```
js/countdown.js
```

Update:

```javascript
const eventDate = new Date("June 15, 2027 09:00:00");
```

---

### Change Colors

Open:

```
css/style.css
```

Modify:

```css
:root {

--primary:#004A98;

--dark:#07133D;

--white:#FFFFFF;

}
```

---

### Replace Speakers

Open:

```
index.html
```

Replace:

```html
<img src="images/speaker1.jpg">
```

with your speaker image.

---

### Replace Venue

Update:

```html
<img src="images/stage.jpg">
```

---

### Registration Form

The demo currently displays a success message after validation.

To connect it to a backend:

- PHP
- Node.js
- Firebase
- Formspree
- Google Forms
- EmailJS

---

## Browser Support

- Chrome
- Edge
- Firefox
- Safari
- Opera

---

## Future Improvements

- Ticket purchasing
- Payment integration
- Speaker profiles
- Multi-day agenda
- Sponsor carousel
- Newsletter signup
- Blog section
- Google Maps integration
- Dark/Light mode
- CMS integration
- Admin dashboard

---

## Performance Tips

- Compress all images before deployment.
- Convert JPG images to WebP.
- Enable browser caching.
- Minify CSS and JavaScript.
- Lazy-load non-critical images.

---

## License

Free for educational and commercial use.

---

