import request from 'request'

export interface SlackPostForm {
    token?: string
    channel?: string
    username?: string
    text?: string
}

export default class Slack {
    constructor() {
    }

    post(form: SlackPostForm, callBack: (error: any, response: http.IncomingMessage, body: any) => void) {
        let options: request.CoreOptions = {
            form: {
                token: form.token || 'xoxp-1047408744934-1038494015810-1142073318243-03d7b134b61b3ddaaa3a2d63cbcfba80',
                channel: form.channel || 'homepage',
                username: form.username || 'yamano_test',
                text: form.text || ''
            }
        }
        request.post('https://slack.com/api/chat.postMessage', options, (error, response, body) => {
            callBack(error, response, body)
        })
    }
}
