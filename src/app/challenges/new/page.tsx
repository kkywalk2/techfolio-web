"use client";
import React, {useState} from "react";
import {withAuth} from "@/components/withAuth";

function NewChallengePage() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("study");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [goal, setGoal] = useState("");
    const [visibility, setVisibility] = useState("public");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Firebase Firestore 저장 로직 연결
        console.log({title, type, startDate, endDate, goal, visibility});
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">새 챌린지 만들기</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border p-2 rounded"
                    placeholder="챌린지 제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <select
                    className="w-full border p-2 rounded"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="study">스터디</option>
                    <option value="side">사이드 프로젝트</option>
                    <option value="book">독서</option>
                    <option value="algo">알고리즘</option>
                    <option value="paper">논문 리뷰</option>
                </select>

                <div className="flex gap-2">
                    <input
                        type="date"
                        className="border p-2 rounded w-1/2"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        className="border p-2 rounded w-1/2"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <textarea
                    className="w-full border p-2 rounded"
                    placeholder="목표를 간단히 적어주세요"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />

                <select
                    className="w-full border p-2 rounded"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                >
                    <option value="public">전체 공개</option>
                    <option value="link">링크 공유</option>
                    <option value="private">비공개</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    챌린지 생성
                </button>
            </form>
        </div>
    );
}

export default withAuth(NewChallengePage);
