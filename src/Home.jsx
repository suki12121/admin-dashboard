import React from "react";
import { PiHandWavingThin, PiCurrencyCircleDollarBold } from "react-icons/pi";
import { BsTextParagraph, BsArrowDown, BsArrowUp } from "react-icons/bs";
import { GrStorage } from "react-icons/gr";
import { AiOutlineShopping, AiOutlineDown } from "react-icons/ai";
import {
  PieChart,
  Label,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const data1 = [
    {
      count: 809680,
      language: "Telugu",
    },
    {
      count: 4555697,
      language: "Hindi",
    },
    {
      count: 12345657,
      language: "English",
    },
  ];
  const data = [
    {
      name: "Jan",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h2>
          Hello Sharukh,
          <PiHandWavingThin className="icon-bg" />
        </h2>
        <div className="search-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
          <input type="search" className="search-input" placeholder="Search" />
        </div>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <PiCurrencyCircleDollarBold className="card-icon1" />
          </div>
          <div className="card-sc">
            <p className="product-heading">
              PRODUCTS
              <br />
              <span className="product-heading1">$198k</span>
              <br />
              <span className="span-bg">
                <BsArrowUp className="card-icon2" />
                37.8%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner1">
            <BsTextParagraph className="card-icon11" />
          </div>
          <div className="card-sc">
            <p className="product-heading">
              Orders
              <br />
              <span className="product-heading1">$2.4k</span>
              <br />
              <span className="span-bg1">
                <BsArrowDown className="card-icon22" />
                2%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner12">
            <GrStorage className="card-icon112" />
          </div>
          <div className="card-sc">
            <p className="product-heading">
              Balance
              <br />
              <span className="product-heading1">$2.4k</span>
              <br />
              <span className="span-bg1">
                <BsArrowDown className="card-icon22" />
                2%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner123">
            <AiOutlineShopping className="card-icon1123" />
          </div>
          <div className="card-sc">
            <p className="product-heading">
              Total Sales
              <br />
              <span className="product-heading1">$89k</span>
              <br />
              <span className="span-bg">
                <BsArrowUp className="card-icon2" />
                11%
              </span>
              this month
            </p>
          </div>
        </div>
      </div>
      <h3 className="chart-heading">Over View</h3>
      <div className="charts">
        <div className="chart-1">
          <ResponsiveContainer width="130%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-1">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="40%"
                data={data1}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Label value="65% Customers" position="center" />
                <Cell name="Telugu" fill="#fecba6" />
                <Cell name="Hindi" fill="#b3d23f" />
                <Cell name="English" fill="#a44c9e" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="product-bg">
        <div className="product-bg1">
          <h2 className="chart-heading">Product sell</h2>
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search             .          last 30 days"
            />
            <AiOutlineDown />
          </div>
        </div>
        <div className="product-bg1">
          <p className="chart-heading1">Product Name</p>
          <div className="search-input-container search-input ">
            <p>stock</p>
            <p className="bg-1">price</p>
            <p className="bg-1">Total sales</p>
          </div>
        </div>
        <div className="product-bg1">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
            className="image-1"
          />
          <div className="image-details">
            <h3>Abstract 3d </h3>
          </div>
          <div className="product-bg1">
            <div className="search-input-container search-input">
              <p>32 in stock</p>
              <p className="bg-1">$45.99</p>
              <p className="bg-1">20</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
