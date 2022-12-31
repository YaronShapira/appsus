import { noteService } from '../apps/note/services/note.service.js'
import { PageLayout } from '../cmps/page-layout.jsx'
const { useRef, useEffect } = React

export function Home() {
    const chartNotesRef = useRef(null)

    function createNotesChart() {
        new Chart(chartNotesRef.current, {
            type: 'bar',
            data: {
                labels: ['Todos Left', 'Import Todos', 'Archived Todos'],
                datasets: [
                    {
                        label: 'Notes Count',
                        data: [5, 2, 7],
                        borderWidth: 1,
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
            console.log(notes)
        })
        // createNotesChart()
    }, [])

    return (
        <PageLayout>
            <section className='home home-index'>
                <h1>Appsus Dashboard</h1>
                <h5>Welcome Back, Coding Academy</h5>
                <div className='main-content'>
                    <div className='card'>
                        <h6>Note Statistics</h6>
                        <h4>5 Todos Left</h4>
                        <h4>2 Important Notes</h4>
                        <h4>7 Notes Archived</h4>
                        <canvas id='myChart' ref={chartNotesRef}></canvas>
                    </div>
                    <div className='card'>
                        <h6>Mail Statistics</h6>
                        <h4>5 Unread Mails</h4>
                        <h4>6 Sent Mails</h4>
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
