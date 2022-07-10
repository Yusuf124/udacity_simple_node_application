function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDate() {
  return new Date();
}

async function main() {
  
    try {
      console.log(getDate());
      console.log("It's running my niggas!");
    } catch (e) {
      console.log(e);
    } finally {
      await sleep(5000);
    }
  
}

main();
