

# Digital Clock

🕒 **About**

Digital Clock is a simple React-based digital clock that displays the current time in a user-friendly format. It updates automatically every second and adjusts for AM/PM formatting.

🚀 **Features**

- Displays real-time digital clock
- Automatic updates every second
- AM/PM format with leading zeros
- Responsive design with a stylish blurred background

🛠️ **Technologies Used**

- React.js
- CSS
- JavaScript (ES6+)

📸 **Screenshot**

_Include a screenshot here if you'd like (optional)_

📦 **Installation & Setup**

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/NisimAtiya/DigitalWatch.git
   ```

2. Navigate into the project directory:
   ```bash
   cd DigitalWatch
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser.

📝 **Usage**

- Run the project using:
  ```bash
  npm run dev
  ```
  The clock will start running, and you’ll see the time update dynamically.
  
- Modify the CSS in `styles.css` to customize the appearance of the clock.

💡 **How It Works**

- The clock is implemented using the `useState` and `useEffect` hooks in React.
- `setInterval` updates the time every second.
- Time is formatted with leading zeroes and AM/PM conversion.

🛠 **Troubleshooting**

- **If the background image is not displaying:**
  Ensure the file path is correct in `styles.css`:
  ```css
  background-image: url(../assets/imeg2.jpg);
  ```

- **If the project does not start:**
  Try running the following commands again:
  ```bash
  npm install
  npm run dev
  ```

🤝 **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.



---

**Author:** Nisim Atiya


