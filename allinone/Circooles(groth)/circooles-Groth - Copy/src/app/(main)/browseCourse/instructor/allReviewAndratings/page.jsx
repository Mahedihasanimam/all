import ReviewCard from "@/components/ui/ReviewCard";
import ratingimage from "../../../../assets/images/srahkhan.png";
import Link from "next/link";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const page = () => {
    const ratings = [
        { stars: 1, count: 10 },
        { stars: 2, count: 25 },
        { stars: 3, count: 240 },
        { stars: 4, count: 240 },
        { stars: 5, count: 240 },
      ];
    
    // review data
    const reviews = [
        {
            name: "Sarah Khan",
            avatar: ratingimage,
            rating: 5,
            time: "a month ago",
            comment:
                "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
        },
        {
            name: "John Doe",
            avatar: ratingimage,
            rating: 4,
            time: "2 weeks ago",
            comment:
                "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
        },
        {
            name: "Emily Smith",
            avatar: ratingimage,
            rating: 5,
            time: "3 weeks ago",
            comment:
                "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
        },
        {
            name: "David Johnson",
            avatar: ratingimage,
            rating: 4,
            time: "a month ago",
            comment:
                "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
        },
    ];


    return (
        <div className="container mx-auto py-8 p-4">
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <Rate disabled count={1} defaultValue={4.5} allowHalf style={{ fontSize: "34px", marginRight: "10px" }} />
        <p className="text-2xl font-bold text-[#475467] " strong style={{ fontSize: "20px" }}>4.5</p>
        <p className="text-[16px] font-medium text-[#475467] " style={{ marginLeft: "10px" }}> <strong className="text-2xl font-bold">Course rating</strong> (4.2k students reviewed)</p>
      </div>
      {ratings.map((rating) => (
        <div key={rating.stars} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <Rate disabled defaultValue={rating.stars} count={5} style={{ fontSize: "18px", marginRight: "10px" }} />
          <p className="text-[16px] text-[#1D2939] font-semibold">{rating.stars} Star</p>
          <p className="text-sm font-medium text-[#1253BB] underline" style={{ marginLeft: "10px" }}>({rating.count} Students)</p>
        </div>
      ))}
    </div>
    <hr />
            <div>
                <h1 className="text-lg font-bold  text-[#475467] font-Merriweather mt-14 pb-6">
                    4.2k reviews & ratings
                </h1>

                {/* Course rating and reviews here---------------------------------------------- */}
                <div className="  w-full ">


                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2  ">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default page