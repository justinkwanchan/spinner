// W02D2 - Spinner II
// Refactor Spinner I to remove repetitive code

const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

const delaySpinner = spinner => {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[0]);
    spinner.length > 1 ? delaySpinner(spinner.slice(1)) : console.log();
  }, 200);
}

delaySpinner(spinnerArray);