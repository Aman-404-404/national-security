document.getElementById("threat-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get input values from the form
    const threatDescription = document.getElementById("threat-description").value;
    const threatLevel = document.getElementById("threat-level").value;
    const threatCategory = document.getElementById("threat-category").value;

    // Validate inputs
    if (!threatDescription || !threatLevel || !threatCategory) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Generate current date and time for the report
    const currentDateTime = new Date().toLocaleString();

    // Analyze the threat based on level and category
    let severity = '';
    let potentialImpact = '';
    let suggestedActions = '';
    let riskAnalysis = '';

    // Severity based on the risk level
    switch (threatLevel) {
        case 'Low':
            severity = 'Low severity: The threat is manageable with minimal immediate action.';
            riskAnalysis = 'Likelihood: Low. Immediate consequences are unlikely.';
            suggestedActions = 'Monitor the situation and be prepared for any developments.';
            break;
        case 'Medium':
            severity = 'Moderate severity: This threat could have a moderate impact if not addressed.';
            riskAnalysis = 'Likelihood: Medium. The situation could escalate if not addressed promptly.';
            suggestedActions = 'Implement preventative measures and prepare response strategies.';
            break;
        case 'High':
            severity = 'High severity: Immediate action is required to mitigate the potential damage.';
            riskAnalysis = 'Likelihood: High. The threat could escalate rapidly and cause significant damage.';
            suggestedActions = 'Take immediate steps to neutralize the threat, such as system lockdowns or deploying security teams.';
            break;
        default:
            severity = 'Severity unknown.';
            riskAnalysis = 'Risk assessment not available.';
            suggestedActions = 'Evaluate the threat further to determine appropriate actions.';
            break;
    }

    // Potential Impact based on the category
    switch (threatCategory) {
        case 'Cybersecurity':
            potentialImpact = 'Cybersecurity threats can lead to data breaches, financial loss, and system disruptions.';
            break;
        case 'Terrorism':
            potentialImpact = 'Terrorist threats can result in large-scale harm, loss of life, and societal panic.';
            break;
        case 'Biological':
            potentialImpact = 'Biological threats could cause widespread illness and strain on healthcare systems.';
            break;
        case 'Natural Disaster':
            potentialImpact = 'Natural disasters can lead to significant loss of life, infrastructure damage, and economic disruption.';
            break;
        case 'Other':
            potentialImpact = 'The impact of this category is unpredictable, depending on the specific nature of the threat.';
            break;
        default:
            potentialImpact = 'Impact unknown.';
            break;
    }

    // Create a detailed report for the threat
    const resultItem = document.createElement("li");
    resultItem.classList.add("result-item");

    resultItem.innerHTML = `
        <h3>Threat Assessment Report</h3>
        <strong>Date and Time of Report:</strong> ${currentDateTime}<br><br>
        <strong>Threat Description:</strong> ${threatDescription}<br>
        <strong>Risk Level:</strong> ${threatLevel}<br>
        <strong>Category:</strong> ${threatCategory}<br><br>
        <strong>Severity:</strong> ${severity}<br>
        <strong>Risk Analysis:</strong> ${riskAnalysis}<br><br>
        <strong>Potential Impact:</strong> ${potentialImpact}<br><br>
        <strong>Suggested Actions:</strong> ${suggestedActions}<br><br>
        <strong>Monitoring Recommendations:</strong> 
        <ul>
            <li>Track any signs of escalation and be ready to act swiftly.</li>
            <li>Set up alert systems to detect early indicators of threat development.</li>
            <li>Conduct regular checks to assess the stability of systems affected by the threat.</li>
        </ul>
    `;

    // Get the results container and append the new item
    const resultsContainer = document.getElementById("threat-results");
    resultsContainer.appendChild(resultItem);

    // Optionally, clear the form after submission
    document.getElementById("threat-form").reset();

     // Show notification
     const notification = document.createElement('div');
     notification.classList.add('notification', 'show');
     notification.textContent = 'Threat has been assessed successfully!';
     document.body.appendChild(notification);
 
     // Remove notification after 3 seconds
     setTimeout(() => {
         notification.classList.remove('show');
         document.body.removeChild(notification);
     }, 3000);

     // Create a Blob to simulate saving the data in a text file
    const blob = new Blob([threatData], { type: 'text/plain' });

    // Create a download link and trigger the file download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'threat_assessment.txt'; // Set the file name

    // Trigger the download
    downloadLink.click();

    // Reset the form
    document.getElementById('threat-form').reset();

    // Display a success notification
    alert('Threat successfully assessed and saved to a text file!');
});

