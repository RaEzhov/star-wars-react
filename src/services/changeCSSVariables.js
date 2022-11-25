export const changeCSSVariables = theme => {
    const root = document.querySelector(':root');
    console.log(theme);

    const variables = ['header', 'background', 'background-color', 'color', 'accent', 'filter-arrow'];
    variables.forEach(variable => {
        root.style.setProperty(`--theme-${variable}`, `var(--theme-${theme}-${variable})`);
    });
};
