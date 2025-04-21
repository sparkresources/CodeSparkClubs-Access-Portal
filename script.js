document.addEventListener('DOMContentLoaded', function() {
    const passwordWrapper = document.getElementById('password-wrapper');
    const passwordInput = document.getElementById('password');
    const submitPasswordButton = document.getElementById('submit-password');
    const passwordError = document.getElementById('password-error');
    const mainContent = document.getElementById('main-content');

    const correctPassword = "CoffeeLake92";

    submitPasswordButton.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            // Hide password wrapper and show main content
            passwordWrapper.style.display = 'none';
            mainContent.style.display = 'block';

            // Initialize the main content functionality (from previous script)
            initializeMainContent();
        } else {
            passwordError.textContent = "Incorrect password. Please try again.";
        }
    });

    function initializeMainContent() {
        const contentArea = document.getElementById('content-area');
        const categoryButtons = document.querySelectorAll('.category-btn');
    
        // Content data organized by categories
        const contentData = {
            events: {
                title: "Events",
                items: [
                    {
                        title: "Event Guide",
                        description: "A comprehensive guide to help you plan and execute successful events for your CodeSparkClubs, ensuring engaging and educational experiences for all members.",
                        link: "https://docs.google.com/document/d/1MjbUwQ7jwOPgdUwEz1yHXrTkrqqxBeVqSMm-b6meRLQ/edit?usp=drive_link"
                    },
                    {
                        title: "AI Events",
                        description: "Explore creative ideas and valuable resources tailored for AI-focused events, perfect for sparking interest and deepening understanding in artificial intelligence among club members.",
                        link: "https://docs.google.com/document/d/1y1c4jB9Ih4Z_Sla8rxn1OQ73hXueAyXv4m2pcljkQK4/edit?usp=drive_link"
                    },
                    {
                        title: "Coding Events",
                        description: "Discover engaging coding activities and exciting competitions designed to enhance coding skills and foster a collaborative learning environment within your CodeSparkClubs.",
                        link: "https://docs.google.com/document/d/1oqM8xcjqKBh3MPKSxHJACLqBINLaOg64TVxjDpGfyO4/edit?usp=drive_link"
                    },
                    {
                        title: "Cybersecurity Events",
                        description: "Access workshops and challenges specifically crafted for cybersecurity enthusiasts, providing hands-on experiences and knowledge in the field of digital security.",
                        link: "https://docs.google.com/document/d/1HrBmEruNhRk81YL3kWRygGHJSJxyOOuYQaLxwspL_9Q/edit?usp=drive_link"
                    },
                    {
                        title: "Hackathon Events",
                        description: "Get essential guidance on planning and executing successful hackathons, from initial concept to final presentations, empowering your club to host impactful and innovative events.",
                        link: "https://docs.google.com/document/d/1uYCShPKMce_OB71u3I_DNyZfBA8tj7OyZzu-XijSSPk/edit?usp=drive_link"
                    }
                ]
            },
            flyers: {
                title: "Flyer Design",
                items: [
                    {
                        title: "Marketing Guide",
                        description: "Navigate the essentials of flyer marketing with this guide. Learn how to create impactful flyers, target your audience effectively, and maximize the reach of your message for CodeSparkClubs.",
                        link: "https://docs.google.com/document/d/1Zst6XSiFt5xZiv29TDTBT4CKXsxWy5UBoAuUdgnRdow/edit?usp=drive_link"
                    },
                    {
                        title: "Templates",
                        description: "Unlock a variety of templates to inspire and streamline your flyer design process. These templates are tailored to help you create visually appealing and engaging promotional materials effortlessly.",
                        link: "https://docs.google.com/document/d/16hkoZxAXsXR8cZ05xXPhoXAH82MVV5rSN8DRzGktcZc/edit?usp=drive_link"
                    },
                    {
                        title: "Resources",
                        description: "Delve into a collection of resources designed to enhance your flyer creation skills. Discover tools, tips, and best practices for designing flyers that captivate and communicate effectively.",
                        link: "https://docs.google.com/document/d/1XvmzRh4pMV-oNjrvRu_BRN5aSCQ9TXbrToWFnekySu8/edit?usp=drive_link"
                    },
                ]
            },
            newsletters: {
                title: "Newsletters",
                items: [
                    {
                        title: "Module 1 Newsletter",
                        description: "Access Module 1 Newsletter",
                        link: "https://secure.smore.com/n/vurhj"
                    },
                    {
                        title: "Module 2 Newsletter",
                        description: "Access Module 2 Newsletter",
                        link: "https://secure.smore.com/n/cdt8v2"
                    },
                    {
                        title: "Module 3 Newsletter",
                        description: "Access Module 3 Newsletter",
                        link: "https://secure.smore.com/n/hn4g3m"
                    },
                    {
                        title: "Module 4 Newsletter",
                        description: "Access Module 4 Newsletter",
                        link: "https://secure.smore.com/n/01ame"
                    },
                    {
                        title: "Module 5 Newsletter",
                        description: "Access Module 5 Newsletter",
                        link: "https://secure.smore.com/n/xg2m3"
                    },
                    {
                        title: "Module 6 Newsletter",
                        description: "Access Module 6 Newsletter",
                        link: "https://secure.smore.com/n/0c739"
                    },
                    {
                        title: "Module 7 Newsletter",
                        description: "Access Module 7 Newsletter",
                        link: "https://secure.smore.com/n/xh27w"
                    },
                    {
                        title: "Module 8 Newsletter",
                        description: "Access Module 8 Newsletter",
                        link: "https://secure.smore.com/n/8pc2qj"
                    },
                    {
                        title: "Module 9 Newsletter",
                        description: "Access Module 9 Newsletter",
                        link: "https://secure.smore.com/n/cjrvy"
                    },
                    {
                        title: "Module 10 Newsletter",
                        description: "Access Module 10 Newsletter",
                        link: "https://secure.smore.com/n/b9tk0"
                    },
                    {
                        title: "Module 11 Newsletter",
                        description: "Access Module 11 Newsletter",
                        link: "https://secure.smore.com/n/puwq0"
                    },
                    {
                        title: "Module 12 Newsletter",
                        description: "Access Module 12 Newsletter",
                        link: "https://secure.smore.com/n/r7ebxt"
                    },
                    {
                        title: "Module 13 Newsletter",
                        description: "Access Module 13 Newsletter",
                        link: "https://secure.smore.com/n/uhse7k"
                    },
                    {
                        title: "Module 14 Newsletter",
                        description: "Access Module 14 Newsletter",
                        link: "https://secure.smore.com/n/spdjx2"
                    },
                    {
                        title: "Module 15 Newsletter",
                        description: "Access Module 15 Newsletter",
                        link: "https://secure.smore.com/n/9trnx"
                    }
                ]
            },
            presentations: {
                title: "Presentations",
                items: [
                    {
                        title: "Introduction to AI",
                        description: "Start your AI journey with a comprehensive introduction that covers the fundamental concepts, applications, and impact of artificial intelligence in today's world.",
                        link: "https://docs.google.com/presentation/d/1CdK2NqjKBCw3SpoWB7PiZXtel4-Bd4gDrOxapPxGF3A/edit?usp=drive_link"
                    },
                    {
                        title: "Machine Learning Workflow",
                        description: "Understand the end-to-end process of machine learning, from data collection and preprocessing to model training, evaluation, and deployment.",
                        link: "https://docs.google.com/presentation/d/18SYvX8ylQt4PVVlABODaOeTQhwDRk1ebUzTjOXPyTY8/edit?usp=drive_link"
                    },
                    {
                        title: "Regression in Machine Learning",
                        description: "Dive into regression techniques, learning how to predict continuous values based on input features, and explore various regression algorithms and evaluation metrics.",
                        link: "https://docs.google.com/presentation/d/18SYvX8ylQt4PVVlABODaOeTQhwDRk1ebUzTjOXPyTY8/edit?usp=drive_link"
                    },
                    {
                        title: "Classification in Machine Learning",
                        description: "Explore classification methods, discovering how to categorize data into distinct classes using machine learning algorithms, and learn about different classification models and performance measures.",
                        link: "https://docs.google.com/presentation/d/18SYvX8ylQt4PVVlABODaOeTQhwDRk1ebUzTjOXPyTY8/edit?usp=drive_link"
                    },
                    {
                        title: "Ensemble Learning",
                        description: "Uncover the power of combining multiple machine learning models to improve prediction accuracy and robustness, learning about various ensemble techniques like bagging, boosting, and stacking.",
                        link: "https://docs.google.com/presentation/d/18SYvX8ylQt4PVVlABODaOeTQhwDRk1ebUzTjOXPyTY8/edit?usp=drive_link"
                    },
                    {
                        title: "CLustering in Machine Learning",
                        description: "Learn how to group similar data points together using clustering algorithms, discovering unsupervised learning methods to identify patterns and structures in datasets.",
                        link: "https://docs.google.com/presentation/d/18SYvX8ylQt4PVVlABODaOeTQhwDRk1ebUzTjOXPyTY8/edit?usp=drive_link"
                    },
                    {
                        title: "Dimensionality Reduction",
                        description: "Discover techniques to reduce the number of input features in a dataset while preserving essential information, enhancing model efficiency and interpretability.",
                        link: "https://docs.google.com/presentation/d/18SYvX8ylQt4PVVlABODaOeTQhwDRk1ebUzTjOXPyTY8/edit?usp=drive_link"
                    },
                    {
                        title: "Intro to Neural Networks",
                        description: "Gain a foundational understanding of neural networks, learning about their architecture, activation functions, and training process, setting the stage for deep learning concepts.",
                        link: "https://docs.google.com/presentation/d/1xkfhbCzegdp6nywfgl-FVQTaorVkU-6uKWEzw4hbThg/edit?usp=drive_link"
                    },
                    {
                        title: "Deep Learning with Keras",
                        description: "Get hands-on experience with deep learning using the Keras library, learning how to build and train neural networks for various applications with ease and flexibility.",
                        link: "https://docs.google.com/presentation/d/1Yr3evAQ5hbJI9PDuH-Xz66UYSi7Hhht1hyPRyZcTK-I/edit?usp=drive_link"
                    },
                    {
                        title: "Convolutional Neural Networks",
                        description: "Explore convolutional neural networks (CNNs) and their applications in image recognition and computer vision tasks, learning about convolutional layers, pooling layers, and network architectures.",
                        link: "https://docs.google.com/presentation/d/1VpIhVQGbxnf8hOflMqLaGp-53mFw3vts9PXwNVGH4ow/edit?usp=drive_link"
                    },
                    {
                        title: "NLP",
                        description: "Dive into the world of natural language processing (NLP), discovering techniques for text analysis, sentiment analysis, language translation, and more, enabling machines to understand and generate human language.",
                        link: "https://docs.google.com/presentation/d/1I1lsYkFfsjUhcvz986WY3nZyIpS1g2ypaWbh_HRzaHE/edit?usp=drive_link"
                    },
                    {
                        title: "Transformers & LLMS",
                        description: "Uncover the architecture and applications of transformers and large language models (LLMs), exploring their capabilities in generating coherent text, answering questions, and performing various NLP tasks.",
                        link: "https://docs.google.com/presentation/d/19SitiyiZqZZgP_W4OjQdlGGqvmjQHYqAP5PBHwTtfj4/edit?usp=drive_link"
                    },
                    {
                        title: "AI in Practice",
                        description: "Explore real-world applications of AI across industries, examining case studies, ethical considerations, and challenges in implementing AI solutions.",
                        link: "https://docs.google.com/presentation/d/1jq_nBs1XzjoPOMfRFbJvART-Vpp_kSNH9Q-MRjZOweY/edit?usp=drive_link"
                    },
                    {
                        title: "Capstone Project Build",
                        description: "Get practical guidance on building a capstone project, from project ideation and planning to development, testing, and deployment, allowing you to showcase your AI skills and knowledge.",
                        link: "https://docs.google.com/presentation/d/1laLAp4PXiwC70mujS26AMiurMqti4F0F_ZMxr0Nx3z0/edit?usp=drive_link"
                    },
                    {
                        title: "Project Presentation and Review",
                        description: "Learn how to effectively present and review AI projects, focusing on communication skills, technical accuracy, and constructive feedback, preparing you for professional engagements in the AI field.",
                        link: "https://docs.google.com/presentation/d/1mjzhCf7sIASf2my3hrRwxa1GC0qZDj4no8eMtoHznvA/edit?usp=drive_link"
                    },
                ]
            },
            projects: {
                title: "Project Guides",
                items: [
                    {
                        title: "Project #1",
                        description: "Access project 1 guide",
                        link: "https://drive.google.com/drive/folders/1TRnSgI1EAdy6jaXJnrn4koeXgwwQ1ilO?usp=drive_link",
                    },
                    {
                        title: "Project #2",
                        description: "Access project 2 guide",
                        link: "https://drive.google.com/drive/folders/1fMFaljGt1omEblsSV0eShNezattBz3gA?usp=drive_link",
                    },
                    {
                        title: "Project #3",
                        description: "Access project 3 guide",
                        link: "https://drive.google.com/drive/folders/127nvXfKqUFBIKQMC_jlAMPgHswHk5-gR?usp=drive_link",
                    },
                    {
                        title: "Project #4",
                        description: "Access project 4 guide",
                        link: "https://drive.google.com/drive/folders/12qHdIQzPMUo1BOa95-wiSvWPQaUmMa9-?usp=drive_link",
                    },
                    {
                        title: "Project #5",
                        description: "Access project 5 guide",
                        link: "https://drive.google.com/drive/folders/1uYsx73rRLlHF2Zd7kCYhiUYf5PcQLCLT?usp=drive_link",
                    },
                    {
                        title: "Project #6",
                        description: "Access project 6 guide",
                        link: "https://drive.google.com/drive/folders/1Wk0TQ9K4wcof-8Dm0WJUVcNXa82FD8ot?usp=drive_link",
                    },
                    {
                        title: "Project #7",
                        description: "Access project 7 guide",
                        link: "https://drive.google.com/drive/folders/1Fzf4p2DH_xF9QkVmBZenMuNo-661obXS?usp=drive_link",
                    },
                    {
                        title: "Project #8",
                        description: "Access project 8 guide",
                        link: "https://drive.google.com/drive/folders/10qi-6rBTONCKOskVlBHmSQrUHBp7_EL5?usp=drive_link",
                    },
                    {
                        title: "Project #9",
                        description: "Access project 9 guide",
                        link: "https://drive.google.com/drive/folders/1wOfDhZI0ZvAo2hlVl_47_hRAWCWjtUSX?usp=drive_link",
                    },
                    {
                        title: "Project #10",
                        description: "Access project 10 guide",
                        link: "https://drive.google.com/drive/folders/1HNePWSpuDEGTCFuAqPd2a9fiqThYeJ7L?usp=drive_link",
                    },
                    {
                        title: "Project #11",
                        description: "Access project 11 guide",
                        link: "https://drive.google.com/drive/folders/1Uf_Yl0d8TAMAnRpKk1nBdwQFxnq1Y1Z7?usp=drive_link",
                    },
                    {
                        title: "Project #12",
                        description: "Access project 12 guide",
                        link: "https://drive.google.com/drive/folders/1v72hUl_ofIt76kTHAZrjp_94yB8t30im?usp=drive_link",
                    },
                    {
                        title: "Project #13",
                        description: "Access project 13 guide",
                        link: "https://drive.google.com/drive/folders/1wy-mnltwcMVetZ_QPYlokZk7hes8cFoY?usp=drive_link",
                    },
                    {
                        title: "Project #14",
                        description: "Access project 14 guide",
                        link: "https://drive.google.com/drive/folders/1pfDUnjv3P4rC8NEJk_101ZZDEtgODMkq?usp=drive_link",
                    },
                    {
                        title: "Project #15",
                        description: "Access project 15 guide",
                        link: "https://drive.google.com/drive/folders/1TFWl5o55Ra474Ohs9bBkyHK3YiivZuAw?usp=drive_link",
                    },
                ]
            },
            resources: {
                title: "Resources",
                items: [
                    {
                        title: "Calendar",
                        description: "Stay organized with our comprehensive calendar, detailing important dates, deadlines, and events to ensure you never miss an opportunity with CodeSparkClubs.",
                        link: "https://docs.google.com/document/d/1wYPqrJu-tA9YPFWNft9ymz0_XBMA7Fs8B0mPBunP9qk/edit?usp=drive_link",
                    },
                    {
                        title: "Officer Handbook",
                        description: "Equip your leadership team with the 'Officer Handbook,' providing essential guidance, best practices, and resources for effective club management and growth.",
                        link: "https://docs.google.com/document/d/1h3ynlILb90QGmpGIX9qbFPOMDjca4e81K4zkrYxtI40/edit?usp=drive_link",
                    },
                    {
                        title: "Syllabus",
                        description: "Outline your AI learning journey with our structured syllabus, designed to guide you through key concepts, milestones, and achievements in your CodeSparkClubs experience.",
                        link: "https://drive.google.com/file/d/1Yi2nwym3AiVnl-TQ_4n_jUEQ14tGb1R1/view?usp=drive_link",
                    },
                    {
                        title: "Reference Sheet",
                        description: "Keep crucial information at your fingertips with our quick 'Reference Sheet,' offering a snapshot of key AI concepts, formulas, and tools for easy learning and quick reference.",
                        link: "https://docs.google.com/document/d/1kuToEe87CJKirFf4pCLYkPiCWW5rEOysoObAK95RR6k/edit?usp=drive_link",
                    },
                ]
            },
            slideshows: {
                title: "Static Slideshows",
                items: [
                    {
                        title: "Module 1",
                        description: "Access Module 1 slideshow",
                        link: "https://prezi.com/view/b6f0doOzpX6N6MjiuwIK/"
                    },
                    {
                        title: "Module 2",
                        description: "Access Module 2 slideshow",
                        link: "https://prezi.com/view/rg84UjWNY6CT5iAV3KVl/"
                    },
                    {
                        title: "Module 3",
                        description: "Access Module 3 slideshow",
                        link: "https://prezi.com/view/XjfQrCAtQo5yjnPt6MuQ/"
                    },
                    {
                        title: "Module 4",
                        description: "Access Module 4 slideshow",
                        link: "https://prezi.com/view/XZMJaRGIlHrF6tAoUIKV/"
                    },
                    {
                        title: "Module 5",
                        description: "Access Module 5 slideshow",
                        link: "https://prezi.com/view/JK0OlVpw1LnSex9VZPjY/"
                    },
                    {
                        title: "Module 6",
                        description: "Access Module 6 slideshow",
                        link: "https://prezi.com/view/AD05RI0czGvY6iS7dokh/"
                    },
                    {
                        title: "Module 7",
                        description: "Access Module 7 slideshow",
                        link: "https://prezi.com/view/hD3OvLVqDc1r4x2LY6xk/"
                    },
                    {
                        title: "Module 8",
                        description: "Access Module 8 slideshow",
                        link: "https://prezi.com/view/LZDKFGxDjHFzV9F5KJEN/"
                    },
                    {
                        title: "Module 9",
                        description: "Access Module 9 slideshow",
                        link: "https://prezi.com/view/YOyMmsGRzIqfqR3ZmhDB/"
                    },
                    {
                        title: "Module 10",
                        description: "Access Module 10 slideshow",
                        link: "https://prezi.com/view/1Pw2UYQegf6JQtgbFtNb/"
                    },
                    {
                        title: "Module 11",
                        description: "Access Module 11 slideshow",
                        link: "https://prezi.com/view/rLf7TCG0jmRwg0kesXer/"
                    },
                    {
                        title: "Module 12",
                        description: "Access Module 12 slideshow",
                        link: "https://prezi.com/view/f302lIbS7ZON9NXosNGH/"
                    },
                    {
                        title: "Module 13",
                        description: "Access Module 13 slideshow",
                        link: "https://prezi.com/view/WSIPZcda11ayOfUkn6fd/"
                    },
                    {
                        title: "Module 14",
                        description: "Access Module 14 slideshow",
                        link: "https://prezi.com/view/1kTeBHw3mAxT7rPP07Uh/"
                    },
                    {
                        title: "Module 15",
                        description: "Access Module 15 slideshow",
                        link: "https://prezi.com/view/vjtDmIvFxYKiR5NiUzF3/"
                    },
                ]
            }
        };

        // Add event listeners to category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                displayCategory(category);
                
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Function to display category content
        function displayCategory(category) {
            const categoryData = contentData[category];
            
            if (!categoryData) {
                displayError("Category not found");
                return;
            }

            let html = `
                <h2>${categoryData.title}</h2>
            `;

            if (categoryData.items.length === 0) {
                html += `<p class="empty-message">Coming soon. Resources are being prepared.</p>`;
            } else {
                html += `<div class="resource-grid">`;
                
                categoryData.items.forEach(item => {
                    html += `
                        <div class="resource-card">
                            <a href="${item.link}" target="_blank">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </a>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }

            contentArea.innerHTML = html;

            // Animate the content area with a fade-in effect
            contentArea.style.opacity = 0;
            contentArea.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                contentArea.style.opacity = 1;
            }, 50);
        }

        // Function to display error messages
        function displayError(message) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <p>${message}</p>
                </div>
            `;
        }

        // Add smooth scrolling for the scroll indicator
        document.querySelector('.scroll-indicator').addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});