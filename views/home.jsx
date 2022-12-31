import { mailService } from '../apps/mail/services/mail.service.js'
import { noteService } from '../apps/note/services/note.service.js'
import { PageLayout } from '../cmps/page-layout.jsx'

const { useRef, useEffect } = React

export function Home() {
    const chartNotesRef = useRef(null)
    const chartMailsRef = useRef(null)

    function createChart(elementRef, notes) {
        new Chart(elementRef.current, {
            type: 'pie',
            data: {
                labels: Object.keys(notes),
                datasets: [
                    {
                        label: 'Notes Count',
                        data: Object.values(notes),
                        borderWidth: 1,
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
        noteService.getNotesCountMap().then(notes => {
            createChart(chartNotesRef, notes)
        })
        mailService.getMailsCountMap().then(mails => {
            createChart(chartMailsRef, mails)
        })
        //
    }, [])

    return (
        <PageLayout>
            <section className='home home-index'>
                <h1>Appsus Dashboard</h1>
                <h5>Welcome Back, Coding Academy</h5>
                <div className='main-content'>
                    <div className='card'>
                        <h6>Note Statistics</h6>
                        {/* <h4>5 Todos Left</h4>
                        <h4>2 Important Notes</h4>
                        <h4>7 Notes Archived</h4> */}
                        <canvas ref={chartNotesRef}></canvas>
                    </div>
                    <div className='card'>
                        <h6>Mail Statistics</h6>
                        {/* <h4>5 Unread Mails</h4>
                        <h4>6 Sent Mails</h4> */}
                        <canvas ref={chartMailsRef}></canvas>
                    </div>
                    <div className='card'>
                        <h6>Book Statistics</h6>
                        <h4>12 Books In Wish List</h4>
                        <h4>7 Books On Sale</h4>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
