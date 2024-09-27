async function fetchTopics() {
    try {
        const response = await fetch("Static/Topic_list.json");

        if (!response.ok) {
            console.error(`Error fetching JSON: ${response.status}`);
            console.log(`${response.statusText}`);
            return;
        }

        const blog_list = await response.json();
        const insertionPoint = document.querySelector('.other-articlewrap');
        let blogListElement = "";

        blog_list.forEach(topic_name => {
            blogListElement += `
                <a href="BlogsHTML/${topic_name}.html">
                    ${topic_name}
                </a>
            `;
        });

        insertionPoint.innerHTML += blogListElement;

    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

fetchTopics();

