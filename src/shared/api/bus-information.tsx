

const getByeollaeBusStopsList = async () => {
  const url = "http://dev.cemi.re.kr:7175/bus_route/2";

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

const getHwarangdaeBusStopsList = async () => {
  const url = "http://dev.cemi.re.kr:7175/bus_route/1";

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

const getBusLoactionData = async () => {
  const url = "http://dev.cemi.re.kr:7175/bus_info";

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export const busInformationData = {
  getBusLoactionData,
  getByeollaeBusStopsList,
  getHwarangdaeBusStopsList,
}