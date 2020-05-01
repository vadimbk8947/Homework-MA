function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponce {
  header = "response header";
  result = "response result";
}

class MyError {
  header = "error header";
  massage = "error massage";
}

function handle(res: MyResponce | MyError) {
  if (res instanceof MyResponce) {
    return {
      info: res.header + res.result,
    };
  }

  return {
    info: res.header + res.massage,
  };
}

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  //...
}

setAlertType("success");
setAlertType("warning");
// setAlertType('default')
