CURRENT_OPTIONS = {
  icon: 'none',
  duration: 2000,
  mask: true,
};

const parseOptions = (message) => {
  const isObject = Object.prototype.toString.call(message) === '[object Object]';
  return isObject ? message : { message };
};

const Toast = (toastOptions) => {
  const options = parseOptions(toastOptions);
  const { message = '', icon = 'none' } = options;
  if (!message) {
    console.error('Error: 缺少必要参数 "message"!');
    return undefined;
  }
  const params = { title: message };
  if (icon === 'loading') {
    Object.assign(params, CURRENT_OPTIONS, { duration: 60000 });
  } else {
    Object.assign(params, CURRENT_OPTIONS);
  }
  delete options.message;
  wx.showToast({ ...params, ...options });
};

const createMethod = (type) => (toastOptions) => {
  const options = parseOptions(toastOptions);
  Toast({ ...options, icon: type });
};

const clear = () => wx.hideToast();

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.clear = clear;

module.exports = Toast;
