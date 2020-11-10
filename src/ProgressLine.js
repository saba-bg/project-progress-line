import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  navDot: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    position: "relative",
    border: "3px solid #a6adb4",
  },
  nav: {
    display: "flex",
    alinItems: "center",
    flexDirection: "row-reverse",
    marginTop: ".75rem",
  },
  navBox: {
    display: "flex",
    flexDirection: "column",
    alinItems: "flex-start",
    marginTop: "1.25rem",
    color: " #a6adb4",
  },
  navDescription: {
    display: "flex",
    justifyContent: "space-between",
    alinItems: "center",
    marginTop: ".75rem",
    fontSize: "1.5rem",
  },
  navDotBox: {
    display: "flex",
    flexDirection: "row",
  },
  littelDots: {
    width: "0.45rem",
    height: "0.45rem",
    borderRadius: "50%",
    border: "1px solid #a6adb4",
    margin: "0 .5rem",
  },
  littelDotsBox: {
    display: "flex",
    flexDirection: "row-reverse",
    //marginTop: "10px",
  },
  persentBox: {
    width: "3.25rem",
    height: "3.25rem",
    borderRadius: "50%",
    backgroundColor: "#6ac24f",
    margin: ".68rem .5rem",
  },
};

function ProgressLine(props) {
  const { classes, navSize, number } = props;
  const count = parseInt(navSize, 10);
  const littelDot = Math.floor(100 / (parseInt(navSize, 10) - 1) / 2);
  const persent = parseInt(number, 10);
  var test = [];
  var test2 = [];
  for (let i = 0; i < count; i++) {
    test.push("0");
  }
  for (let j = 0; j < littelDot; j++) {
    test2.push("0");
  }
  var k = 0;
  return (
    <div
      className={classes.littelDotsBox}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <div
        style={{
          marginLeft: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HamburgerMenu />
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "100",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          منو
        </p>
      </div>

      <div className={classes.nav}>
        <div className={classes.navBox}>
          <div className={classes.navDotBox}>
            {test.map((d, i, arr) => (
              <div className={classes.nav}>
                {arr.length - 1 == i || arr.length - 2 == i ? (
                  <div
                    className={classes.navDot}
                    style={{ backgroundColor: "#c5e1a5", border: "none" }}
                  ></div>
                ) : (
                  <div className={classes.navDot}></div>
                )}

                {i !== 0 ? (
                  <div className={classes.nav}>
                    {" "}
                    {test2.map((d, j, ar) => (
                      <div>
                        {arr.length - 1 == i ||
                        (arr.length - 2 == i && j == 0) ||
                        (arr.length - 2 == i && j == 1) ? (
                          <div
                            className={classes.littelDots}
                            style={{
                              backgroundColor: "#c5e1a5",
                              border: "none",
                            }}
                          ></div>
                        ) : (
                          <div className={classes.littelDots}></div>
                        )}
                        {/*   {i == persent - 1 || j == persent - 1 ? (
                        <div className={classes.persentBox}></div>
                      ) : null} */}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className={classes.navDescription}>
            <p>نوار پیشرفت</p>
            <p>پایان دوره</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ProgressLine);
