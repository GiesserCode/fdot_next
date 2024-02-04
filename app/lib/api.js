export const sendContactForm = async (data) => {
    console.log(data);  // No changes here

    const response = await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
};
