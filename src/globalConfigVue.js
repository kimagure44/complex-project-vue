export default {
  productionTip: false,
  errorHandler: (err, vm, info) => {
    debugger;
    console.log(err, vm, info);
  },
  warnHandler: (msg, vm, trace) => {
    debugger;
    console.log(msg, vm, trace);
  },
};
