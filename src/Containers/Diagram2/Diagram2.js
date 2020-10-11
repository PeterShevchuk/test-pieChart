import React from "react";
import PropTypes from "prop-types";

import "./Diagram2.css";
const hoverDiag = (e) => {
  //   //   e.target.style.transform = "translate(20px, 20px)";
  //   e.target.style.transform = "rotate(20deg)";
  //   e.target.addEventListener("mouseout", (event) => {
  //     // console.log(event);
  //     event.target.style.transform = "translate(0, 0)";
  //   });
};

const Diagram2 = ({ data }) => {
  const allWidthCount = data.listFiltered.map((item) => Math.ceil((360 * item.count) / data.allCount));
  let startAngle = 0;
  let endAngle = 0;
  let x1,
    x2,
    y1,
    y2 = 0;

  function drawArcs(index) {
    startAngle = endAngle;
    endAngle = startAngle + allWidthCount[index];
    x1 = parseInt(200 + 180 * Math.cos((Math.PI * startAngle) / 180));
    y1 = parseInt(200 + 180 * Math.sin((Math.PI * startAngle) / 180));
    x2 = parseInt(200 + 180 * Math.cos((Math.PI * endAngle) / 180));
    y2 = parseInt(200 + 180 * Math.sin((Math.PI * endAngle) / 180));
    return { dig: `M200,200  L${x1},${y1}  A180,180 0 0,1 ${x2},${y2} z`, stick: `M200,200  L${x1},${y1}  A180,180 0 0,1 ${x2},${y2} z` };
  }
  return (
    <>
      <h1>Diagram2</h1>
      <div id="holder">
        <svg version="1.1" width="1000" height="500" className="diagram2">
          <svg
            version="1.1"
            //   style="position: absolute; width: 1357px; height: 500px; top: 0px; left: 0px;"
          >
            <desc>JavaScript chart by amCharts 3.21.15</desc>
            <g>
              <path cs="100,100" d="M0.5,0.5 L1356.5,0.5 L1356.5,499.5 L0.5,499.5 Z" fill="#FFFFFF" stroke="#000000" fillOpacity="0" strokeWidth="1" strokeOpacity="0" className="amcharts-bg"></path>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g>
              <g className="amcharts-pie-item" aria-label="The Netherlands: 3.03% 50 " opacity="1" transform="translate(-3,-27)">
                <path cs="1000,1000" d=" M678.5,250 L652.7294294195234,116.46394609710578 A136,136,0,0,1,678.5,114 L678.5,250 Z" fill="#b9783f" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M666.5,115.5 L664.5,83.5 L656.5,83.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Belgium: 3.64% 60 " opacity="1" transform="translate(-8,-26)">
                <path cs="1000,1000" d=" M678.5,250 L623.1175041808578,125.7873631354575 A136,136,0,0,1,652.7294294195234,116.46394609710578 L678.5,250 Z" fill="#b7b83f" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M638.5,121.5 L632.5,102.5 L624.5,102.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="UK: 6.01% 99 " opacity="1" transform="translate(-15,-22)">
                <path cs="1000,1000" d=" M678.5,250 L581.2352585921725,154.94438428546977 A136,136,0,0,1,623.1175041808578,125.7873631354575 L678.5,250 Z" fill="#448e4d" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M601.5,139.5 L590.5,122.5 L582.5,122.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Austria: 7.79% 128.3 " opacity="1" transform="translate(-23,-14)">
                <path cs="1000,1000" d=" M678.5,250 L547.9754709308862,211.79859542783714 A136,136,0,0,1,581.2352585921725,154.94438428546977 L678.5,250 Z" fill="#2f4074" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M561.5,182.5 L544.5,171.5 L536.5,171.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Australia: 8.49% 139.9 " opacity="1" transform="translate(-27,0)">
                <path cs="1000,1000" d=" M678.5,250 L546.6840378645063,283.4746490092738 A136,136,0,0,1,547.9754709308862,211.79859542783714 L678.5,250 Z" fill="#cd82ad" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M543.5,248.5 L523.5,247.5 L515.5,247.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Germany: 10.06% 165.8 " opacity="1" transform="translate(-23,15)">
                <path cs="1000,1000" d=" M678.5,250 L591.9378570250085,354.8951638712535 A136,136,0,0,1,546.6840378645063,283.4746490092738 L678.5,250 Z" fill="#cc4748" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M564.5,323.5 L547.5,333.5 L539.5,333.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Lithuania: 30.46% 501.9 " transform="translate(22,-16)" opacity="1">
                <path cs="1000,1000" d=" M678.5,250 L678.5,114 A136,136,0,0,1,806.5839409138866,295.7220305757302 L678.5,250 Z" fill="#67b7dc" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M789.5,172.5 L806.5,160.5 L814.5,160.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Czech Republic: 18.32% 301.9 " opacity="1" transform="translate(16,22)">
                <path cs="1000,1000" d=" M678.5,250 L806.5839409138866,295.7220305757302 A136,136,0,0,1,688.9384409853493,385.59881618139366 L678.5,250 Z" fill="#fdd400" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M761.5,358.5 L773.5,374.5 L781.5,374.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
              <g className="amcharts-pie-item" aria-label="Ireland: 12.20% 201.1 " opacity="1" transform="translate(-8,26)">
                <path cs="1000,1000" d=" M678.5,250 L688.9384409853493,385.59881618139366 A136,136,0,0,1,591.9378570250085,354.8951638712535 L678.5,250 Z" fill="#84b761" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
                <path cs="100,100" d="M638.5,379.5 L632.5,398.5 L624.5,398.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible" fillOpacity="0"></path>
              </g>
            </g>
            <g></g>
            <g>
              <g transform="translate(22,-16)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" className="amcharts-pie-label" transform="translate(818,160)" visibility="visible">
                  <tspan y="6" x="0">
                    Lithuania: 30.46%
                  </tspan>
                </text>
              </g>
              <g transform="translate(16,22)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" className="amcharts-pie-label" transform="translate(785,374)" visibility="visible">
                  <tspan y="6" x="0">
                    Czech Republic: 18.32%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-8,26)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(620,398)" visibility="visible">
                  <tspan y="6" x="0">
                    Ireland: 12.20%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-23,15)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(535,333)" visibility="visible">
                  <tspan y="6" x="0">
                    Germany: 10.06%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-27,0)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(511,247)" visibility="visible">
                  <tspan y="6" x="0">
                    Australia: 8.49%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-23,-14)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(532,171)" visibility="visible">
                  <tspan y="6" x="0">
                    Austria: 7.79%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-15,-22)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(578,122)" visibility="visible">
                  <tspan y="6" x="0">
                    UK: 6.01%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-8,-26)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(620,102)" visibility="visible">
                  <tspan y="6" x="0">
                    Belgium: 3.64%
                  </tspan>
                </text>
              </g>
              <g transform="translate(-3,-27)">
                <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pie-label" transform="translate(652,83)" visibility="visible">
                  <tspan y="6" x="0">
                    The Netherlands: 3.03%
                  </tspan>
                </text>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g>
              <g></g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          {/* <g className="diagram2__g">
            {data.listFiltered.map((item, index) => (
              <g key={index} className="diagram2__pie-chart">
                <path cs="1000,1000" d={drawArcs(index).dig} fill={data.colorArr[index]} stroke="#FFFFFF" strokeWidth="5" strokeOpacity="1" fillOpacity="1"></path>

                <path cs="100,100" d={drawArcs(index).stick} fill="none" strokeOpacity="0.9" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
              </g>
            ))}

            <g className="amcharts-pie-item" aria-label="The Netherlands: 3.03% 50 ">
              <path cs="1000,1000" d=" M678.5,250 L652.7294294195234,116.46394609710578 A136,136,0,0,1,678.5,114 L678.5,250 Z" fill="#b9783f" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M666.5,115.5 L664.5,83.5 L656.5,83.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Belgium: 3.64% 60 ">
              <path cs="1000,1000" d=" M678.5,250 L623.1175041808578,125.7873631354575 A136,136,0,0,1,652.7294294195234,116.46394609710578 L678.5,250 Z" fill="#b7b83f" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M638.5,121.5 L632.5,102.5 L624.5,102.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="UK: 6.01% 99 ">
              <path cs="1000,1000" d=" M678.5,250 L581.2352585921725,154.94438428546977 A136,136,0,0,1,623.1175041808578,125.7873631354575 L678.5,250 Z" fill="#448e4d" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M601.5,139.5 L590.5,122.5 L582.5,122.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Austria: 7.79% 128.3 ">
              <path cs="1000,1000" d=" M678.5,250 L547.9754709308862,211.79859542783714 A136,136,0,0,1,581.2352585921725,154.94438428546977 L678.5,250 Z" fill="#2f4074" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M561.5,182.5 L544.5,171.5 L536.5,171.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Australia: 8.49% 139.9 ">
              <path cs="1000,1000" d=" M678.5,250 L546.6840378645063,283.4746490092738 A136,136,0,0,1,547.9754709308862,211.79859542783714 L678.5,250 Z" fill="#cd82ad" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M543.5,248.5 L523.5,247.5 L515.5,247.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Germany: 10.06% 165.8 ">
              <path cs="1000,1000" d=" M678.5,250 L591.9378570250085,354.8951638712535 A136,136,0,0,1,546.6840378645063,283.4746490092738 L678.5,250 Z" fill="#cc4748" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M564.5,323.5 L547.5,333.5 L539.5,333.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Lithuania: 30.46% 501.9 " transform="translate(22,-16)" opacity="1">
              <path cs="1000,1000" d=" M678.5,250 L678.5,114 A136,136,0,0,1,806.5839409138866,295.7220305757302 L678.5,250 Z" fill="#67b7dc" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M789.5,172.5 L806.5,160.5 L814.5,160.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Czech Republic: 18.32% 301.9 ">
              <path cs="1000,1000" d=" M678.5,250 L806.5839409138866,295.7220305757302 A136,136,0,0,1,688.9384409853493,385.59881618139366 L678.5,250 Z" fill="#fdd400" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M761.5,358.5 L773.5,374.5 L781.5,374.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
            <g className="amcharts-pie-item" aria-label="Ireland: 12.20% 201.1 ">
              <path cs="1000,1000" d=" M678.5,250 L688.9384409853493,385.59881618139366 A136,136,0,0,1,591.9378570250085,354.8951638712535 L678.5,250 Z" fill="#84b761" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="1" fillOpacity="1" className="amcharts-pie-slice"></path>
              <path cs="100,100" d="M638.5,379.5 L632.5,398.5 L624.5,398.5" fill="none" strokeOpacity="0.3" stroke="#000000" className="amcharts-pie-tick" visibility="visible"></path>
            </g>
          </g> */}
          {/* <g>
            <g transform="translate(22,-16)">
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" className="amcharts-pieLabel" transform="translate(818,160)" visibility="visible">
                <tspan y="6" x="0">
                  Lithuania: 30.46%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" className="amcharts-pieLabel" transform="translate(785,374)" visibility="visible">
                <tspan y="6" x="0">
                  Czech Republic: 18.32%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(620,398)" visibility="visible">
                <tspan y="6" x="0">
                  Ireland: 12.20%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(535,333)" visibility="visible">
                <tspan y="6" x="0">
                  Germany: 10.06%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(511,247)" visibility="visible">
                <tspan y="6" x="0">
                  Australia: 8.49%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(532,171)" visibility="visible">
                <tspan y="6" x="0">
                  Austria: 7.79%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(578,122)" visibility="visible">
                <tspan y="6" x="0">
                  UK: 6.01%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(620,102)" visibility="visible">
                <tspan y="6" x="0">
                  Belgium: 3.64%
                </tspan>
              </text>
            </g>
            <g>
              <text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" className="amcharts-pieLabel" transform="translate(652,83)" visibility="visible">
                <tspan y="6" x="0">
                  The Netherlands: 3.03%
                </tspan>
              </text>
            </g>
          </g> */}
        </svg>
      </div>
    </>
  );
};

export default Diagram2;

Diagram2.propTypes = {
  data: PropTypes.object.isRequired,
};
