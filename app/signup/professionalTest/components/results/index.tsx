import { regStyles, testStyles } from "@/styles"

const ResultsPageSecond = () => {
    return (
        <div className="container">
            <div className="text-center">
                <p className={`${testStyles.headingSecondary} my-8`}>Your results</p>
                <p className={regStyles.paragraph}>Personality questions</p>
            </div>

            <div className={testStyles.chartContainer}>
                <div className={testStyles.chart}></div>
                <div className={testStyles.chartText}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit suscipit dignissimos pariatur nostrum libero ipsam quis possimus cupiditate, optio explicabo. Excepturi suscipit quia tempore, aut quos nostrum vitae veritatis consectetur, mollitia exercitationem asperiores voluptatum sequi reiciendis recusandae sunt repellat harum. Labore praesentium pariatur temporibus iusto cumque beatae delectus laboriosam?</p>
                </div>
            </div>
        </div>
    )
}
export default ResultsPageSecond