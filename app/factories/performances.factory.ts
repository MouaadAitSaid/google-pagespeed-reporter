
const performanceScore = (results: any) => {
    const {
        lighthouseResult: {
            categories: {
                performance: {
                    score: globalPerformanceScore
                }
            }
        }
    } = results;
    return globalPerformanceScore;
}

const metrics = (results: any) => {
    const {
        loadingExperience: {
            metrics: {
                FIRST_INPUT_DELAY_MS: { distributions: distFID },
                LARGEST_CONTENTFUL_PAINT_MS: { distributions: distLCP },
                FIRST_CONTENTFUL_PAINT_MS: { distributions: distFCP }
            }
        }
    } = results;

    return {
        distFID,
        distLCP,
        distFCP
    }
}

const audits = (results: any) => {
    const {
        lighthouseResult: {
            audits: {
                "server-response-time": {
                    details: {
                        items
                    }
                },
                "speed-index": {
                    displayValue: spoedIndex
                }
            }
        }
    } = results;

    return {
        serverResponseTime: items[0].responseTime,
        spoedIndex,
    }
}

export const performanceMapper = ({ globalPerformanceScore }: any) => {
    return { perfScore: globalPerformanceScore }
}


export default (results: any) => ({
    globalPerformanceScore: performanceScore(results),
    metrics: metrics(results),
    audits: audits(results)
});


