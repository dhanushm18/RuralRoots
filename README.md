# Farmer and Driver Details Modals

This project is a web application that displays information about farmers and drivers. When users click on a product or service, a modal pops up with the details of the respective farmer or driver.

## Features

- Display farmer details for various products.
- Display driver details for various services.
- Use of modals for clean and interactive UI.
- Responsive design for better user experience on different devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Open `index.html` in your browser:**

    You can open the file directly in your web browser to view the application.

    ```bash
    open index.html
    ```

## Usage

1. **View Farmer Details:**

    - Navigate to the products section.
    - Click on the button associated with any product.
    - A modal will appear showing the details of the farmer related to the product.

2. **View Driver Details:**

    - Navigate to the services section.
    - Click on the button associated with any service.
    - A modal will appear showing the details of the driver related to the service.

## File Structure

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file for styling the application.
- `scripts.js`: The JavaScript file containing the logic for displaying modals with farmer and driver details.

## Code Explanation

- The JavaScript code listens for the `DOMContentLoaded` event to ensure the DOM is fully loaded before executing any script.
- Two separate objects (`farmerDetails` and `driverDetails`) hold the details for farmers and drivers, respectively.
- Event listeners are added to buttons within the `.product-item` and `.service-item` classes to display modals with the relevant details when clicked.
- Modals are closed either by clicking the close button or clicking outside the modal.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Contact

If you have any questions or suggestions, please feel free to contact me at your-email@example.com.

