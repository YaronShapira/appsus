import { mailService } from '../apps/mail/services/mail.service.js'
import { noteService } from '../apps/note/services/note.service.js'
import { PageLayout } from '../cmps/page-layout.jsx'
const { NavLink } = ReactRouterDOM

const { useRef, useEffect } = React

export function Home() {
    const chartNotesRef = useRef(null)
    const chartMailsRef = useRef(null)

    function createChart(elementRef, notes) {
        new Chart(elementRef.current, {
            type: 'doughnut',
            data: {
                labels: Object.keys(notes),
                datasets: [
                    {
                        border: 0,
                        borderColor: 'rgba(0, 0, 0,0)',
                        label: 'Notes Count',
                        data: Object.values(notes),
                        backgroundColor: ['#36a2eb', '#ff6384', '#4bc0c0', '#ff9f40', '#9966ff', '#ffcd56', '#c9cbcf'],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        })
    }

    useEffect(() => {
        const notesMapPromise = noteService.getNotesCountMap()
        const mailsMapPromise = mailService.getMailsCountMap()
        Promise.all([notesMapPromise, mailsMapPromise]).then(values => {
            createChart(chartNotesRef, values[0])
            createChart(chartMailsRef, values[1])
        })
    }, [])

    return (
        <PageLayout>
            <section className='home home-index app-container'>
                <h1>Appsus Dashboard</h1>
                <h5>Welcome Back, Coding Academy</h5>
                <div className='main-content'>
                    <div className='col'>
                        <div className='card'>
                            <h6>Note Statistics</h6>
                            {/* <h4>5 Todos Left</h4>
                        <h4>2 Important Notes</h4>
                        <h4>7 Notes Archived</h4> */}
                            <canvas ref={chartNotesRef}></canvas>
                        </div>
                        <NavLink to='/note' className='btn go-to-btn'>
                            Go To Keepy
                        </NavLink>
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <h6>Mail Statistics</h6>
                            {/* <h4>5 Unread Mails</h4>
                        <h4>6 Sent Mails</h4> */}
                            <canvas ref={chartMailsRef}></canvas>
                        </div>
                        <NavLink to='/mail' className='btn go-to-btn'>
                            Go To Maily
                        </NavLink>
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <h6>Book Statistics</h6>
                            <h4>12 Books In Wish List</h4>
                            <h4>7 Books On Sale</h4>
                        </div>
                        <NavLink to='/note' className='btn go-to-btn'>
                            Go To Booky
                        </NavLink>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
