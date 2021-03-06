<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/vs/loader.js"></script>
<script>
  require.config({
    paths: {
      'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/vs'
    }
  });
  window.MonacoEnvironment = {
    getWorkerUrl: function (workerId, label) {
      return '/monaco-editor-worker-loader-proxy.js';
    }
  };
  require(["vs/editor/editor.main"], function () {})
</script>