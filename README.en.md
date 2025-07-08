[Leia isto em Português](README.md)

# 💻 IFB Access - Access Management System

<div align="center">

  ![Project Status](https://img.shields.io/badge/Status-In%20Production%20(Pilot)-brightgreen)
  &nbsp;&nbsp;
  ![License](https://img.shields.io/badge/License-MIT-blue)

</div>

![Main_Screen](.github/tela_inicio.png)

## 🎯 About The Project

**IFB Access** is a web system developed as a Final Paper Project to address a critical security vulnerability at the Instituto Federal de Brasília (IFB) - Campus Brasília. Previously, access control was virtually nonexistent, with underutilized electronic turnstiles left open, creating security risks for the academic community, which includes underage students.

This system was created to mitigate these risks by providing a robust administrative interface for centralized access management. Through it, the campus administration can manage users, restrict access to authorized personnel only, and audit the flow of entries and exits in real-time.

Currently, the project is in its **pilot deployment phase** on campus, integrated with a hardware solution (Arduino + NFC) developed by another team, demonstrating its real-world applicability and impact.

---

## ✨ Key Features

- ✅ **Access Dashboard:** Real-time visualization of the latest entry and exit logs.
- 👤 **User Management:**
  - A comprehensive table with search, pagination, and filtering capabilities.
  - Registration of new users (students, staff, etc.).
  - Editing of individual profiles and permissions.
  - Functionality to block/unblock specific users' access.
- 📋 **Detailed Logs:** Query and audit the entire access history, with detailed information on date, time, and user.
- 🔐 **Secure Authentication:** Restricted access to the platform for authorized administrators only, via Google OAuth, ensuring data security.
- ➕ **Manual Actions:** Allows for the manual addition of access records for exceptional cases.

---

## 🚀 Technologies Used

This project was built with a modern stack, focusing on performance, scalability, and a great developer experience.

### **Front-End:**

- [**React 18**](https://reactjs.org/) and [**Vite**](https://vitejs.dev/) for a fast and reactive foundation.
- [**TypeScript**](https://www.typescriptlang.org/) for static typing and code safety.
- [**TailwindCSS**](https://tailwindcss.com/) for agile and consistent styling.
- [**Tanstack Query (React Query)**](https://tanstack.com/query/latest) for server-state management and request caching.
- [**React Hook Form**](https://react-hook-form.com/) + [**Zod**](https://zod.dev/) for robust, schema-based form validation.
- [**React Router DOM**](https://reactrouter.com/) for route management.
- [**Headless UI**](https://headlessui.com/) for accessible and decoupled UI components.
- [**Biome**](https://biomejs.dev/) as a code Linter and Formatter.

### **Back-End (Consumed API):**

- [**Python**](https://www.python.org/) with [**Flask**](https://flask.palletsprojects.com/) for building the REST API.
- [**MySQL**](https://www.mysql.com/) as the relational database.
- [**Docker**](https://www.docker.com/) for containerization and environment standardization.

### **Design and Prototyping:**

- [**Figma**](https://www.figma.com/) for designing all interfaces (UI) and prototyping the user experience (UX), with a focus on accessibility.

---

## 🔒 Access and Demonstration

As this is a system in production that handles real and sensitive institutional data, access to the application is restricted to authorized administrators. Likewise, the API consumed by the system is private, which prevents the project from being run independently in a local environment.

However, you can explore the project in the following ways:

1. 🎨 **Navigate the Figma Prototype:** To understand the screen flows and user experience, you can browse the interactive prototype at [**this Figma link**](https://www.figma.com/design/h2xJaeMbgAyK7AmNMaASMi/SISTEMA-DE-GERENCIAMENTO?node-id=711-3076&t=URKIkJws3xKQMA5K-1).
2. 📄 **Full Documentation (Final Paper):** For an in-depth analysis of the architecture, business rules, UML diagrams, and design decisions, you can access the complete Final Paper Project (only in Portuguese) [**Final Paper link**](https://drive.google.com/file/d/1I4WpQSBKHscXVN-tE9vuQD_y5p1S2qO0/view?usp=sharing).

---

## 👨‍💻 My Contribution

As the lead front-end developer for this application, my responsibilities included:

- Developing the entire administrative interface with React and TypeScript, from component architecture to API integration.
- Designing and prototyping all screens in Figma, ensuring an intuitive and accessible UI/UX.
- Actively participating in the development of the Python/Flask API, being responsible for creating the CRUD endpoints for users, logs, and observations.

---

## 📝 License

This project is under the MIT License.
