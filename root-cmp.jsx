const { Route, Routes, Switch } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/app-header.jsx'
import { Home } from './views/home.jsx'
import { MailIndex } from './apps/mail/views/mail-index.jsx'
import { NoteIndex } from './apps/note/views/note-index.jsx'
import { MailDetails } from './apps/mail/views/mail-details.jsx'
import UserMsg from './cmps/user-msg.jsx'

export function App() {
    return (
        <Router>
            <main className='app main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/mail' element={<MailIndex />} />
                    <Route path='/mail/:mailId' element={<MailDetails />} />
                    <Route path='/note' element={<NoteIndex />} />
                </Routes>
                <UserMsg />
            </main>
        </Router>
    )
}
