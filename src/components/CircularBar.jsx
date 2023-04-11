import { ResponsiveRadialBar } from '@nivo/radial-bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadialBar = ({ data }) => {
    return(
    <ResponsiveRadialBar 
        data={data}
        valueFormat=">-.2f"
        startAngle={-360}
        innerRadius={0.2}
        padding={0.25}
        cornerRadius={45}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={null}
        circularAxisOuter={null}
        labelsSkipAngle={7}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
     )} ;
export default MyResponsiveRadialBar;