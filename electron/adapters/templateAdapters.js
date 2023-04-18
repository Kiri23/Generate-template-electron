/**
 * For now these functions are pretty simple, but the idea of 
 * using an adapter is to "adapt / tranform" the response in order for the services files to use
 */

// The module we're trying to require is written in ECMAScript modules (ESM) syntax,
// which is not supported by the CommonJS require() function by default. We can use dynamic
// import() to work around this issue.
const loadTemplates = async () => {
  const {default: {getTemplates}} = await import("generate-template-shared-logic");
  return await getTemplates();
}

const duplicate_template = async (selectedTemplateDir, destinationDirectory) => {
    const { default:{copy} } = await import("generate-template-shared-logic");
    return await copy(selectedTemplateDir, destinationDirectory);
}   

module.exports = { 
    loadTemplates,
    duplicate_template
}