import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PageArea from "./styled";

import useApi from "../../helpers/BSAPI";
import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/patials/AdItem";

let timer;

const Page = () => {
  const api = useApi();
  const history = useHistory();
  const useQueryString = () => new URLSearchParams(useLocation().search);

  const query = useQueryString();

  const [q, setQ] = useState(query.get("q") !== null ? query.get("q") : "");
  const [cat, setCat] = useState(
    query.get("cat") !== null ? query.get("cat") : ""
  );
  const [getState, setGetState] = useState(
    query.get("state") !== null ? query.get("state") : ""
  );

  const [adsTotal, setAdsTotal] = useState(0);
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [resultOpacity, setResultOpacity] = useState(1);
  const [loading, setLoading] = useState(true);

  const getAdsList = async () => {
    setLoading(true);
    let offset = 0;
    offset = (currentPage - 1) * 9;

    const json = await api.getAds({
      sort: "desc",
      limit: 9,
      q,
      cat,
      state: getState,
      offset,
    });
    setAdList(json.ads);
    setAdsTotal(json.total);
    setResultOpacity(1);
    setLoading(false);
  };

  useEffect(() => {
    if (adList.length > 0) {
      setPageCount(Math.ceil(adsTotal / adList.length));
    } else {
      setPageCount(0);
    }
  }, [adsTotal]);

  useEffect(() => {
    const queryString = [];
    if (q) {
      queryString.push(`q=${q}`);
    }
    if (cat) {
      queryString.push(`cat=${cat}`);
    }
    if (getState) {
      queryString.push(`state=${getState}`);
    }

    history.replace({
      search: `?${queryString.join("&")}`,
    });

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(getAdsList, 1500);
    setResultOpacity(0.3);
    setCurrentPage(1);
  }, [q, cat, getState]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await api.getStates();
      setStateList(sList);
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const sList = await api.getCategories();
      setCategories(sList);
    };
    getCategories();
  }, []);

  useEffect(() => {
    setResultOpacity(0.3);
    getAdsList();
  }, [currentPage]);

  const pagination = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pagination.push(i);
  }

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <form method="GET">
            <input
              type="text"
              name="q"
              value={q}
              placeholder="What are you looking for?"
              onChange={(e) => setQ(e.target.value)}
            />

            <div className="filterName">State:</div>
            <select
              name="state"
              value={getState}
              onChange={(e) => setGetState(e.target.value)}
            >
              <option></option>
              {stateList.map((i, k) => (
                <option key={k} value={i.name}>
                  {i.name}
                </option>
              ))}
            </select>

            <div className="filterName">Categories:</div>
            <ul>
              {categories.map((i, k) => (
                <li
                  key={k}
                  className={
                    cat === i.slug ? "categoryItem active" : "categoryItem"
                  }
                  onClick={(e) => setCat(i.slug)}
                >
                  <img src={i.img} alt="" />
                  <span>{i.name}</span>
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className="rightSide">
          <h2>Result</h2>

          {loading && adList.length === 0 && (
            <div className="listWarning">Loading....</div>
          )}
          {!loading && adList.length === 0 && (
            <div className="listWarning">No results found</div>
          )}

          <div className="list" style={{ opacity: resultOpacity }}>
            {adList.map((i, k) => (
              <AdItem key={k} data={i} />
            ))}
          </div>
          <div className="pagination">
            {pagination.map((i, k) => (
              <div
                key={k}
                onClick={() => setCurrentPage(i)}
                className={i === currentPage ? "pageItem active" : "pageItem"}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
