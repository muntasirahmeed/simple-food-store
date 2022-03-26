import React from "react";
import { Accordion } from "react-bootstrap";
import "./Answer.css";
const Answer = () => {
  return (
    <div className="container my-5">
      <div>
        <Accordion  >
          <Accordion.Item eventKey="0">
            <Accordion.Header>ReactJs কিভাবে কাজ করে?</Accordion.Header>
            <Accordion.Body>
              ReactJS-এর মূল উদ্দেশ্য হল ইউজার ইন্টারফেস (UI) তৈরি করা যা
              অ্যাপগুলির গতিকে উন্নত করে। এটি ভার্চুয়াল DOM ব্যবহার করে, যা
              অ্যাপটির কর্মক্ষমতা উন্নত করে। জাভাস্ক্রিপ্ট ভার্চুয়াল DOM
              স্বাভাবিক DOM থেকে দ্রুত কাজ করে । আমরা ক্লায়েন্ট এবং
              সার্ভার-সাইডের পাশাপাশি অন্যান্য ফ্রেমওয়ার্কের সাথে ReactJS
              ব্যবহার করতে পারি। এটি কম্পোনেন্ট এবং ডেটা প্যাটার্ন ব্যবহার করে
              যা পঠনযোগ্যতা উন্নত করে এবং বড় অ্যাপগুলির কর্মক্ষমতা ও কোড
              রক্ষণাবেক্ষনে অধিক ভারসাম্য বজায় রাখতে সাহায্য করে।
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>use State কিভাবে কাজ করে?</Accordion.Header>
            <Accordion.Body>
            useState হল একটি হুক (ফাংশন) যেইটা আমাদের দুইটা জিনিস রির্টান করে। একটি হলো ফাংশন এবং আরেকটা হলো ভেরিয়েবল । useState কে একটা initial value দিতে হয় । এবং ফাংশনটা ভেরিয়েবল আপডেট করার কাজ করে। এইটা করা হয় এই জন্য যেন সেই ভেরিয়েবল এর আন্ডারে কোথায় কিছু পরিবর্তন হলে রিয়েক্ট তা বুঝতে পারে । 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};


export default Answer;
