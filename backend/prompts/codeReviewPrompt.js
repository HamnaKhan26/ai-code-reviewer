export function buildPrompt(diff, language="JavaScript") {

    return `You are a senior software engineer reviewing a pull request. 
    Review the following PR diff and responsd in this format:


1. Summary
2. Bugs/ Logical Issues
3. Performance Improvements
4. Security Concerns
5. Code Quality suggestions

PR Diff:
${diff}
`;

}