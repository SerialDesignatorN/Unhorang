const AppRemote = require('@electron/remote')
const minim = document.getElementById('minimize')
const maxim = document.getElementById('maximize')
const close = document.getElementById('close')
const maxText = document.getElementById('maximize-text')

const GetWindow = () => require('@electron/remote').BrowserWindow.getFocusedWindow()

const Minimize = () => GetWindow().minimize()
const Maximize = () => {
    const GetCondition = () => GetWindow().isMaximized()
    GetCondition() ? GetWindow().unmaximize() : GetWindow().maximize()
    GetCondition() ? maxText.innerText = 'stack' : maxText.innerHTML = 'crop_square'
}
const Close = () => {
    GetWindow().close()
}
close.addEventListener('click', Close)
maxim.addEventListener('click', Maximize)
minim.addEventListener('click', Minimize)