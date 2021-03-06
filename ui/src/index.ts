import { define, dispatch, html, Hybrids, parent } from 'hybrids'
import * as CamEl from '@auzmartist/cam-el'
import NdjinnUI from './ui'
import Nodes from './node'

import Mousetrap from 'mousetrap'

let components = {
	...CamEl,
	...NdjinnUI,
	...Nodes,
}

// Candidate cam-el
define('cam-hotkey-toggle', {
	keys: 'x',
	on: false,
	parent: parent((hy) => hy.hasOwnProperty('tagName')),
	value: {
		get: (host, val = host.on) => val,
		set: (host, val) => val,
		connect: (host, key) => {
			Mousetrap(host.parent).bind(host.keys, (e) => {
				dispatch(host, 'change', {detail: !host[key], bubbles: true})
				host[key] = !host[key]
			})
		},
	},
	render: ({value}) => html`<div tabindex="0">
		${value ? html`<slot name="on"></slot>` : html`<slot name="off"></slot>`}
	</div>`
} as Hybrids<any>)
