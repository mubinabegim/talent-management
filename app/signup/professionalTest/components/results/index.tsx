import { regStyles, testStyles } from "@/styles"
import ExampleChart from "./Chart"
const ResultsPageSecond = () => {
    return (
        <div className={testStyles.resultContainer}>
            <div className="text-center">
                <p className={`${testStyles.headingSecondary} mt-20`}>Your results</p>
            </div>

            <div className={testStyles.chartItem}>
                <p className={regStyles.paragraph}>Personality questions</p>
                <div className={testStyles.chartContainer}>
                    <ExampleChart />
                    <div className={testStyles.chartText}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit suscipit dignissimos pariatur nostrum libero ipsam quis possimus cupiditate. Excepturi suscipit quia tempore, aut quos nostrum vitae veritatis consectetur, reiciendis recusandae sunt repellat harum. </p>
                    </div>
                </div>
            </div>
            <div className={testStyles.chartItem}>
                <p className={regStyles.paragraph}>Interest questions</p>
                <div className={testStyles.chartContainer}>
                    <div className={testStyles.chartText}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit suscipit dignissimos pariatur nostrum libero ipsam quis possimus cupiditate. Excepturi suscipit quia tempore, aut quos nostrum vitae veritatis consectetur,  reiciendis recusandae sunt repellat harum. </p>
                    </div>
                    <div className="bg-indigo-100 rounded-2xl p-4 max-w-[300px]">
                        <img src="/images/puzzle.png" alt="puzzle" />
                    </div>
                </div>
            </div>
            <div className={testStyles.chartItem}>
                <p className={regStyles.paragraph}>Career match questions</p>
                <div className={testStyles.chartContainer}>
                <div className="bg-indigo-100 rounded-full p-5 max-w-[300px]">
                        <img src="/images/pie-chart1.png" alt="puzzle" />
                    </div>
                    <div className={testStyles.chartText}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit suscipit dignissimos pariatur nostrum libero ipsam quis possimus cupiditate. Excepturi suscipit quia tempore, aut quos nostrum vitae veritatis consectetur, mollitia exercitationem asperiores voluptatum sequi reiciendis recusandae sunt repellat harum. </p>
                    </div>

                </div>
            </div>

            <div className={testStyles.chartFooter}>
                <p className={regStyles.paragraph}>Professional advice</p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lobortis ante. Cras lobortis erat sed sapien laoreet, ac dapibus tellus consectetur. Ut id commodo leo, sed elementum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et dolor in justo gravida hendrerit. Fusce id neque nec dolor eleifend tincidunt in id mi. Phasellus velit nulla, interdum id viverra non, blandit sed metus. Morbi tristique sit amet dolor quis tincidunt. Praesent porttitor tempus molestie
                </p>
                <p>
                Maecenas placerat volutpat nulla, quis euismod arcu vulputate a. Etiam tincidunt diam at libero feugiat, at finibus magna commodo. Fusce finibus, odio sit amet aliquam vestibulum, turpis ipsum scelerisque tortor, quis volutpat neque ex in orci. Curabitur tempus consequat orci sit amet varius. Suspendisse at eros consectetur, efficitur erat sed, pellentesque nibh. In sit amet convallis nunc. Integer vitae orci sed dui accumsan maximus nec quis arcu.
                </p>
            </div>
        </div>
    )
}
export default ResultsPageSecond