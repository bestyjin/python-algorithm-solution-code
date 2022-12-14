-- 코드를 입력하세요
SELECT A.PRODUCT_ID, A.PRODUCT_NAME, (A.PRICE * SUM(B.AMOUNT)) AS PRICE
FROM FOOD_PRODUCT A
JOIN FOOD_ORDER B
ON A.PRODUCT_ID = B.PRODUCT_ID
WHERE B.PRODUCE_DATE >= '2022-05-01' AND B.PRODUCE_DATE < '2022-06-01'
GROUP BY B.PRODUCT_ID
ORDER BY PRICE DESC, PRODUCT_ID