package simple.simplenote.domain;


import lombok.Getter;
import lombok.Setter;
import simple.simplenote.domain.contents.Card;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Member {
    @Id @Column(name = "member_id")
    private String nickName;

    @OneToMany(mappedBy = "member")
    private List<Card> cards = new ArrayList<>();
}
