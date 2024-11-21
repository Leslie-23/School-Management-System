### Welcome to the **PAL School Management System**! 🎓

This MERN-based app simplifies school operations, organizes classes, and enhances communication among students, teachers, and admins. It provides seamless attendance tracking, performance evaluations, and real-time communication tools. 🛠️

---

### **Features at a Glance**

- **Admin Control:** Manage students, teachers, classes, and system settings with ease.
- **Attendance Tracking:** Mark attendance and generate detailed reports.
- **Performance Metrics:** Assess students' progress with marks, feedback, and visuals.
- **User-Friendly Communication:** Stay connected with messaging tools.
- **Role-Based Access:** Dedicated dashboards for Admin, Teacher, and Student users.

---

### **How to Get Started**

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Leslie-23/School-Management-System.git
   ```
2. **Setup Backend:**
   - Navigate to the `backend` folder.
   - Install dependencies and start the server:
     ```sh
     cd backend
     npm install
     npm start
     ```
   - Create a `.env` file with:
     ```sh
     MONGO_URL=mongodb://127.0.0.1/school
     #localhost open end for testing. ensure you replace with your actual DB
     ```
3. **Setup Frontend:**
   - Navigate to the `frontend` folder.
   - Install dependencies and run:
     ```sh
     cd frontend
     npm install
     npm start
     ```
   - Open `http://localhost:3000` in your browser.

---

### **Troubleshooting Common Issues**

- **Signup Error?** Update your `.env` or direct base URLs in Redux files as outlined in the full instructions.
- **Delete Disabled?** Uncomment the `deleteUser` function and update `deleteHandler` in admin files to re-enable.

---

### **Deployment**

- **Backend:** Vercel
- **Frontend:** Netlify

---

**Explore, contribute, and simplify school management with ease!**

Feel free to reach out for further assistance or leave a star on the repository. 😊
