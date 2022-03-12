export function HMAPageItem(page) {
  return (dispatch, getState) => {
    let { auth } = getState();
    console.log(auth.profileState);
    const url = APIUrls.HMAPageItem(, page);
    console.log(
      "About to call GetItems API",
      Date.now() - auth.lastKnownProfilingTime
    );
    dispatch(timeProfiler(Date.now()));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.verification.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "Got response of GetItems APi",
          Date.now() - auth.lastKnownProfilingTime
        );
        dispatch(timeProfiler(Date.now()));
        if (data.error.message === "") {
          console.log(
            "UI Display started",
            Date.now() - auth.lastKnownProfilingTime
          );
          dispatch(timeProfiler(Date.now()));
          dispatch(savePageInfo(data.pageInfo));
          dispatch(LIGetAnswer());
        }
      });
  };
}
