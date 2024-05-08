// Import necessary modules
const fs = require("fs");
const ejs = require("ejs");

// Define file paths
const tsDeclarationFile = "dist/index.d.ts";
const readmeTemplateFile = "read-me-template.md";
const readmeFile = "README.md";
const initialReadmeFile = "README.md";

// Read the TypeScript declaration file
fs.promises
  .readFile(tsDeclarationFile, "utf8")
  .then((data) => {
    // Parse the TypeScript declaration file to extract function details
    const functionDetails = parseTypeScriptDeclarationFile(data);

    // Generate the function content based on the extracted details
    const functionContent = functionDetails
      .map((detail) => `\`${detail.name}\`: ${detail.description}\n\n`)
      .join("");

    // Render the README template with the generated content
    return ejs.renderFile(readmeTemplateFile, { functionContent });
  })
  .then((readmeContent) =>
    // Write the generated README content to the file
    fs.promises.writeFile(readmeFile, readmeContent, "utf8")
  )
  .then(() => console.log("README.md updated successfully!"))
  .catch((err) => {
    console.error(err, "README.md failed to update");

    // If there's an error, return the initial README.md file
    return fs.promises
      .readFile(initialReadmeFile, "utf8")
      .then((initialReadmeContent) =>
        fs.promises.writeFile(readmeFile, initialReadmeContent, "utf8")
      )
      .then(() => console.log("Initial README.md restored."));
  });

// Parse the TypeScript declaration file and extract function details
function parseTypeScriptDeclarationFile(data) {
  const functionRegex = /declare const (\w+):/g;
  const descriptionRegex = /\/\*\*\n\s\* (.+?)\n\s\* @/g;

  let functionDetails = [];
  let match;

  while ((match = functionRegex.exec(data)) !== null) {
    const functionName = match[1];
    const descriptionMatch = descriptionRegex.exec(data);
    const description = descriptionMatch ? descriptionMatch[1].trim() : "";

    functionDetails.push({ name: functionName, description });
  }

  return functionDetails;
}
